import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WarrantyClaimModel} from '../../model/WarrantyClaimModel';
import { DataService } from 'src/app/service/data-service';

@Component({
  selector: 'app-tracuubaohanh',
  templateUrl: './tracuubaohanh.component.html',
  styleUrls: ['./tracuubaohanh.component.css']
})
export class TracuubaohanhComponent implements OnInit {

  searchForm: FormGroup;
  warrantyClaimModel: WarrantyClaimModel;
  message: string;
  dataService: DataService;
  isSubmited = false;
  capcha: number;
  isCapcha: boolean = false;

  constructor(dataService: DataService) {
    this.dataService =dataService;
    this.searchForm = new FormGroup ({
      serial: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      verifyCode: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)])
    });
  }

  ngOnInit(): void {
    this.getCapcha(100000, 999999);
  }

  getCapcha(min, max) {
    this.capcha = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  searchFormFn(){
    this.isSubmited = true;
    if(!this.validateForm()){
      return;
    }
    let serial = this.searchForm.value.serial;
    this.dataService.getWarrantyClaim(serial).subscribe((result) => {
     this.warrantyClaimModel = result;
    }, (error) => {
      this.message = error;
      this.warrantyClaimModel = null;
    });
  }

  validateForm(): boolean {
    let result = true;
    let isVerifyCapcha = this.searchForm.get('verifyCode').value != this.capcha.toString();
    if (isVerifyCapcha){
      this.isCapcha = true;
      result = false;
    } else {
      this.isCapcha = false;
    }
    if (!this.searchForm.valid) {
      result = false;
    }
    this.getCapcha(100000, 999999);
    return result;
  }

}
