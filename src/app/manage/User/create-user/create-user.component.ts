import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../service/admin-service";
import {DataService} from "../../../service/data-service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Account} from "../../../model/Account";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  lstRole: string[];
  formUser: FormGroup;
  isNeedCheck = false;
  isPassMatch = true;
  account: Account;
  lstAllUsername: string[];
  isExistUsername = false;

  constructor(private router: Router, private dataService: DataService, private adminService: AdminService) {
    this.formUser = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      repass: new FormControl(),
      role: new FormControl('', Validators.required),
    })
    this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.lstAllUsername = Object.values(history.state);
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
        this.router.navigate(['/quan-ly/tai-khoan']);
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
      this.isExistUsername = true;
      return false;
    } else {
      this.isExistUsername = false;
    }
    this.isPassMatch = this.formUser.get('password').value == this.formUser.get('repass').value;
    return this.isPassMatch;

  }
}
