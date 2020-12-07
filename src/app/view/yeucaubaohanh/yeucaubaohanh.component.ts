import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WarrantyClaimModel} from '../../model/WarrantyClaimModel';
import {Province} from '../../model/Province';
import {Ward} from '../../model/Ward';
import {District} from '../../model/District';
import { DataService } from 'src/app/service/data-service';

@Component({
  selector: 'app-yeucaubaohanh',
  templateUrl: './yeucaubaohanh.component.html',
  styleUrls: ['./yeucaubaohanh.component.css']
})
export class YeucaubaohanhComponent implements OnInit {

  warrantyClaimFrom: FormGroup;
  warrantyClaimModel: WarrantyClaimModel = new WarrantyClaimModel();
  dataService: DataService;
  lstAllProvince: Province[];
  lstDistrict: District[];
  lstWard: Ward[];
  currentDistrict: string = '';
  isSubmited = false;
  capcha: number;
  isCapcha: boolean = false;
  isMessage: boolean = false;
  isExitSerial: boolean = true;

  constructor(dataService: DataService) { 
    this.dataService = dataService;
    this.warrantyClaimFrom = new FormGroup({
      customerName: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      address: new FormControl('',[Validators.required,Validators.maxLength(200),Validators.minLength(5)]),
      phone: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      phone2: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      email: new FormControl('',[Validators.required,Validators.email,Validators.required,Validators.maxLength(30),Validators.minLength(5)]),
      serial: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      description: new FormControl('',[Validators.required,Validators.maxLength(300),Validators.minLength(5)]),
      province: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      district: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      ward: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      verifyCode: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)])
    });
    this.dataService.getProvince().subscribe(data => {
      this.lstAllProvince = data;
    }, error => {
      console.log(error);
    });
  }
  ngOnInit(): void {
    this.getCapcha(100000, 999999);
  }
  warrantyClaim(){
    this.isSubmited = true;
    if(!this.validateForm()){
      return;
    }
    this.dataService.saveWarrantyClaim(this.convertWarranty()).subscribe(data => { 
      this.resetData();
      this.isMessage = true;
    },error => {console.log(error)});
  }
  resetData(){
    this.isSubmited = false;
    this.warrantyClaimFrom.reset();
  }

  getCapcha(min, max) {
    this.capcha = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  convertWarranty():WarrantyClaimModel{
    this.warrantyClaimModel.address= this.warrantyClaimFrom.value.address;
    this.warrantyClaimModel.customerName= this.warrantyClaimFrom.value.customerName;
    this.warrantyClaimModel.description= this.warrantyClaimFrom.value.description;
    this.warrantyClaimModel.province= this.warrantyClaimFrom.value.province;
    this.warrantyClaimModel.district= this.warrantyClaimFrom.value.district;
    this.warrantyClaimModel.ward= this.warrantyClaimFrom.value.ward;
    this.warrantyClaimModel.email= this.warrantyClaimFrom.value.email;
    this.warrantyClaimModel.phone2= this.warrantyClaimFrom.value.phone2;
    this.warrantyClaimModel.phone= this.warrantyClaimFrom.value.phone;
    this.warrantyClaimModel.serial= this.warrantyClaimFrom.value.serial;
    console.log(this.warrantyClaimModel)
    return this.warrantyClaimModel;
  }

  validateForm(): boolean {
    if(!this.isExitSerial){
      return false;
    }
    let result = true;
    let isVerifyCapcha = this.warrantyClaimFrom.get('verifyCode').value != this.capcha.toString();
    if (isVerifyCapcha){
      this.isCapcha = true;
      result = false;
    } else {
      this.isCapcha = false;
    }
    if (!this.warrantyClaimFrom.valid) {
      result = false;
    }
    this.getCapcha(100000, 999999);
    return result;
  }

  querrySerial(event){
    this.dataService.checkSerial(event.target.value).subscribe(id => this.isExitSerial = true ,err => this.isExitSerial = false)
  }

  boxselect(name:String,event:any){
    let value = event.target.value;
    switch(name){
      case 'province':
        this.currentDistrict = value;
        this.dataService.getDistrict(value).subscribe(data => {
          this.lstDistrict = data;
        }, error => {
          console.log(error);
        });
      case 'district':
        this.dataService.getWard(this.currentDistrict,value).subscribe(data => {
          this.lstWard = data;
        }, error => {
          console.log(error);
        });
    }
  }
}
