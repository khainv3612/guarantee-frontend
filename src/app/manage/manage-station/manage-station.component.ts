import {Component, OnInit} from '@angular/core';
import {Station} from "../../model/Station";
import {Province} from "../../model/Province";
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../service/data-service";
import {AuthService} from "../../service/auth-service";
import {AdminService} from "../../service/admin-service";

@Component({
  selector: 'app-manage-station',
  templateUrl: './manage-station.component.html',
  styleUrls: ['./manage-station.component.css']
})
export class ManageStationComponent implements OnInit {

  lstSource: Station[];
  order = 0;
  // lstAllPending: Station[];
  // lstAllAccepted: Station[];
  lstAllProvince: Province[];
  lstFilterStation: Station[];
  formFilter: FormGroup;
  typeStation: string;
  menuTabPrevious: any = null;


  constructor(private dataService: DataService, private authService: AuthService, private manageService: AdminService) {
    this.formFilter = new FormGroup({
      name: new FormControl(),
      area: new FormControl(),
      province: new FormControl()
    })

    this.getAllPending();
    this.dataService.getProvince().subscribe(data => {
      this.lstAllProvince = data;
    }, error => {
      console.log(error);
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
      console.log(error);
    })
  }

  getAllAccept() {
    this.typeStation = 'accepted';
    this.dataService.getAllStationAccepted().subscribe(data => {
      this.lstSource = data;
      this.lstFilterStation = data;
      this.setColorMenu('menu-tab', 1);
    }, error => {
      console.log(error);
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
      alert("CÓ LỖI XẢY RA");
      console.log('error');
    })
  }

  removeStation(id: number) {
    if (!confirm("ARE YOU SURE?"))
      return;
    return this.manageService.removeStation(id).subscribe(result => {
      console.log(result)
      alert("xoa thanh cong");
      if (this.typeStation == 'pending') {
        this.getAllPending();
      } else {
        this.getAllAccept();
      }
    }, error => {
      alert("co loi xay ra");
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

