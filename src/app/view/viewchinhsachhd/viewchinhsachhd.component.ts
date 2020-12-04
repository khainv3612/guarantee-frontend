import {Component, OnInit} from '@angular/core';
import {Policy} from "../../model/Policy";
import {ActivatedRoute, Router} from '@angular/router';
import {AdminService} from "../../service/admin-service";

@Component({
  selector: 'app-viewchinhsachhd',
  templateUrl: './viewchinhsachhd.component.html',
  styleUrls: ['./viewchinhsachhd.component.css']
})
export class ViewchinhsachhdComponent implements OnInit {
  firstPage = 1;
  policy: Policy;
  menuTabPrevious: any = null;

  constructor(private routerActive: ActivatedRoute,
              private adminService: AdminService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getPolicy(this.firstPage);
  }

  getPolicy(id: number) {
    this.setColorMenu('menu-tab', id - 1);
    this.adminService.getPolicy(id).subscribe(result => {
      this.policy = result;
    }, error => {
      this.router.navigate(['error']).then();
    });
  }

  setColorMenu(name: string, stt: number) {
    if (null != this.menuTabPrevious)
      this.menuTabPrevious.style.color = "";
    const ele = document.getElementsByName(name)[stt];
    ele.style.color = "orange";
    this.menuTabPrevious = ele;
  }

}
