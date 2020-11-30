import {Component, OnInit} from '@angular/core';
import {Station} from "../../model/Station";
import {Province} from "../../model/Province";
import {FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../service/data-service";

@Component({
  selector: 'app-manage-station',
  templateUrl: './manage-station.component.html',
  styleUrls: ['./manage-station.component.css']
})
export class ManageStationComponent implements OnInit {

  lstAllStation: Station[];
  lstAllProvince: Province[];
  lstFilterStation: Station[];
  formFilter: FormGroup;


  constructor(private dataService: DataService) {
    this.formFilter = new FormGroup({
      name: new FormControl(),
      area: new FormControl(),
      province: new FormControl()
    })
    this.dataService.getAllStation().subscribe(data => {
      this.lstAllStation = data;
      this.lstFilterStation = data;
    }, error => {
      console.log(error);
    })

    this.dataService.getProvince().subscribe(data => {
      this.lstAllProvince = data;
    }, error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }


  filter() {
    this.lstFilterStation = this.lstAllStation;
    const name = this.formFilter.get('name').value;
    const area = this.formFilter.get('area').value;
    const province = this.formFilter.get('province').value;
    if (undefined != name) {
      if (name != '') {
        this.lstFilterStation = this.lstFilterStation.filter(station => station.name == name);
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
}

