import {Component, OnInit} from '@angular/core';
import {Account} from "../../../model/Account";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {DataService} from "../../../service/data-service";
import {AdminService} from "../../../service/admin-service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  lstRole: string[];
  formUser: FormGroup;
  isNeedCheck = false;
  isPassMatch = true;
  account: Account;
  lstAllUsername: string[];
  isExsistUsername = false;

  constructor(private router: Router, private dataService: DataService, private adminService: AdminService) {
    this.router.getCurrentNavigation().extras.state;
    this.lstAllUsername = Object.values(history.state[0]);
    this.account = history.state[1];
    console.log(this.account.role.role)
    this.formUser = new FormGroup({
      username: new FormControl(this.account.username, Validators.required),
      password: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      repass: new FormControl(),
      role: new FormControl(this.account.role.role, Validators.required),
    })

  }

  ngOnInit(): void {
    this.getRoleUnderAdmin();
  }

  getRoleUnderAdmin() {
    this.dataService.getAllRoleUnderAdmin().subscribe(data => {
      this.lstRole = data;
    }, error => {
      console.log(error);
    })
  }

  ngSubmit() {
    if (!this.validateForm())
      return;

    this.account = {
      username: this.formUser.get('username').value,
      password: this.formUser.get('password').value,
      role: this.formUser.get('role').value

    };
    this.adminService.createAccount(this.account).subscribe(result => {
      if (result) {
        alert("THEM USER THANH CONG");
        this.router.navigate(['/manage/user']);
      } else {
        alert("CO LOI XAY RA");
      }
    }, error => {
      alert("CO LOI XAY RA");
      console.log(error);
    })
  }

  validateForm(): boolean {
    this.isNeedCheck = true;
    if (!this.formUser.valid) {
      return false;
    }
    if (this.lstAllUsername.includes(this.formUser.get('username').value.toString())) {
      this.isExsistUsername = true;
      return false;
    } else {
      this.isExsistUsername = false;
    }
    this.isPassMatch = this.formUser.get('password').value == this.formUser.get('repass').value;
    if (!this.isPassMatch)
      return false;
    return true;
  }
}
