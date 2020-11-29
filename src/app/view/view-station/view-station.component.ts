import {Component, OnInit} from '@angular/core';
import {Station} from "../../model/Station";
import {DataService} from "../../service/data-service";
import {Province} from "../../model/Province";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-view-station',
  templateUrl: './view-station.component.html',
  styleUrls: ['./view-station.component.css']
})
export class ViewStationComponent implements OnInit {
  lstAllStation: Station[];
  lstAllProvince: Province[];
  lstFilterStation: Station[];
  formFilter: FormGroup;


  constructor(private dataService: DataService) {
    this.formFilter = new FormGroup({
      stationName: new FormControl(),
      area: new FormControl(),
      province: new FormControl()
    })
    this.dataService.getAllStation().subscribe(data => {
      this.lstAllStation = data;
      this.testFilter();
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

  testFilter() {
    this.lstFilterStation = this.lstAllStation.filter(province => province.id == 3);
    console.log(this.lstFilterStation);
  }

  filter() {
if(true){
  
}
  }
}
