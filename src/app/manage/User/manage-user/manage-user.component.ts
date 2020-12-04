import {Component, OnInit} from '@angular/core';
import {AdminService} from "../../../service/admin-service";
import {Account} from "../../../model/Account";
import {DataService} from "../../../service/data-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {
  lstAllUser: Account[];
  lstAllUsername: string[];

  constructor(private adminService: AdminService, private router: Router) {
    this.lstAllUsername = [];
  }

  ngOnInit(): void {
    this.getAllAccount();
  }

  getAllAccount() {
    this.adminService.getAllUser().subscribe(data => {
      this.lstAllUser = data;
      for (let i = 0; i < this.lstAllUser.length; i++) {
        this.lstAllUsername.push(this.lstAllUser[i].username.toString());
      }
    }, error => {
      console.log(error);
    })
  }

  deleteAccount(id: number) {
    if (!confirm("ARE YOU SURE?"))
      return;
    this.adminService.deleteAccount(id).subscribe(result => {
      if (result) {
        alert("XOA THANH CONG");
        this.getAllAccount();
      } else {
        alert("XOA KHONG THANH CONG")
      }
    }, error => {
      alert("XOA KHONG THANH CONG");
      console.log(error);
    })
  }

  redirectCreatePage() {
    this.router.navigateByUrl('/manage/create-user', {state: this.lstAllUsername});
  }
}
