import {Component, OnInit} from '@angular/core';
import {Policy} from "../../model/Policy";
import {ActivatedRoute} from "@angular/router";
import {AdminService} from "../../service/admin-service";

@Component({
  selector: 'app-viewchinhsachhd',
  templateUrl: './viewchinhsachhd.component.html',
  styleUrls: ['./viewchinhsachhd.component.css']
})
export class ViewchinhsachhdComponent implements OnInit {
  firstPage = 1;
  policy: Policy;

  constructor(private routerActive: ActivatedRoute, private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.getPolicy(this.firstPage);
  }

  getPolicy(id: number) {
    this.adminService.getPolicy(id).subscribe(result => {
      this.policy = result;
    }, error => {
      console.log(error);
    });
  }

}
