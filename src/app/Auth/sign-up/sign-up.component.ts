import {Component, OnInit} from '@angular/core';
import {DataService} from "../../service/data-service";
import {Province} from "../../model/Province";
import {District} from "../../model/District";
import {Ward} from "../../model/Ward";
import {TypeStation} from "../../model/TypeStation";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  capcha: number;
  lstProvince: Province[];
  lstDistrict: District[];
  lstWard: Ward[];
  lstTypeStation: TypeStation[];
  provinceSelected: number;
  districtSelected: number;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.getProvince();
    this.getTypeStation();
    this.getCapcha(100000, 999999);
  }

  getCapcha(min, max) {
    this.capcha = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getProvince() {
    this.dataService.getProvince().subscribe(data => {
        this.lstProvince = data;
      },
      error => {
        console.log('error when get list province');
        console.log(error);
      })
  }

  getDistrict() {
    this.dataService.getDistrict(this.provinceSelected).subscribe(result => {
      this.lstDistrict = result;
      this.districtSelected = this.lstDistrict[0].id;
      this.getWard();
    }, error => {
      console.log(error);
    })


  }

  getWard() {
    this.dataService.getWard(this.districtSelected).subscribe(result => {
      this.lstWard = result;
    }, error => {
      console.log(error);
    })
  }

  getTypeStation() {
    this.dataService.getTypeStation().subscribe(data => {
      this.lstTypeStation = data;
    }, error => {
      console.log(error);
    })
  }

}
