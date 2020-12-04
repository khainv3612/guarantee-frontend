import {Component, OnInit} from '@angular/core';
import {Station} from "../../model/Station";
import {Province} from "../../model/Province";
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../service/data-service";
import {AuthService} from "../../service/auth-service";
import {AdminService} from "../../service/admin-service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-station',
  templateUrl: './manage-station.component.html',
  styleUrls: ['./manage-station.component.css']
})
export class ManageStationComponent implements OnInit {

  lstSource: Station[];
  order = 0;
  lstAllProvince: Province[];
  lstFilterStation: Station[];
  formFilter: FormGroup;
  typeStation: string;
  menuTabPrevious: any = null;


  constructor(private dataService: DataService,
              private authService: AuthService,
              private manageService: AdminService,
              private router: Router) {
    this.formFilter = new FormGroup({
      name: new FormControl(),
      area: new FormControl(),
      province: new FormControl()
    })

    this.getAllPending();
    this.dataService.getProvince().subscribe(data => {
      this.lstAllProvince = data;
    }, error => {
      this.router.navigate(['error']).then();
    })
  }

  ngOnInit(): void {

  }


  getAllPending() {
    this.typeStation = 'pending';
    this.dataService.getAllStationPending().subscribe(data => {
      this.lstSource = data;
      this.lstFilterStation = data;
      this.setColorMenu('menu-tab', 0);
    }, error => {
      this.router.navigate(['error']).then();
    })
  }

  getAllAccept() {
    this.typeStation = 'accepted';
    this.dataService.getAllStationAccepted().subscribe(data => {
      this.lstSource = data;
      this.lstFilterStation = data;
      this.setColorMenu('menu-tab', 1);
    }, error => {
      this.router.navigate(['error']).then();
    })
  }

  filter() {
    this.lstFilterStation = this.lstSource;
    const name = this.formFilter.get('name').value;
    const area = this.formFilter.get('area').value;
    const province = this.formFilter.get('province').value;
    if (undefined != name) {
      if (name != '') {
        this.lstFilterStation = this.lstFilterStation.filter(station => station.name.includes(name));
      } else {
        this.lstFilterStation = this.lstFilterStation.filter(station => station.name != name);
      }
    }
    if (undefined != area) {
      if (area != '') {
        this.lstFilterStation = this.lstFilterStation.filter(station => station.area == area);
      } else {
        this.lstFilterStation = this.lstFilterStation.filter(station => station.area != area);
      }
    }
    if (undefined != province) {
      if (province != '') {
        this.lstFilterStation = this.lstFilterStation.filter(station => station.province == province);
      } else {
        this.lstFilterStation = this.lstFilterStation.filter(station => station.province != province);
      }
    }
  }

  acceptStation(id: number) {
    return this.manageService.acceptStation(id).subscribe(result => {
      alert("DUYỆT THÀNH CÔNG");
      this.getAllPending();
    }, error => {
      this.router.navigate(['error']).then();
    })
  }

  removeStation(id: number) {
    if (!confirm("ARE YOU SURE?"))
      return;
    return this.manageService.removeStation(id).subscribe(result => {
      alert("XÓA THÀNH CÔNG");
      if (this.typeStation == 'pending') {
        this.getAllPending();
      } else {
        this.getAllAccept();
      }
    }, error => {
      this.router.navigate(['error']).then();
    })
  }

  setColorMenu(name: string, stt: number) {
    if (null != this.menuTabPrevious)
      this.menuTabPrevious.style.color = "";
    const ele = document.getElementsByName(name)[stt];
    ele.style.color = "orange";
    this.menuTabPrevious = ele;
  }
}

