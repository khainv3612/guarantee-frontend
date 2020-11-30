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

  constructor(dataService: DataService) { 
    this.dataService = dataService;
    this.warrantyClaimFrom = new FormGroup({
      customerName: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      address: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      phone: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      phone2: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      email: new FormControl('',[Validators.required,Validators.email,Validators.required,Validators.maxLength(30),Validators.minLength(5)]),
      product: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      modelProduct: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      serial: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      description: new FormControl('',[Validators.required,Validators.maxLength(200),Validators.minLength(5)]),
      province: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      district: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      ward: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)])
    });
    this.dataService.getProvince().subscribe(data => {
      this.lstAllProvince = data;
    }, error => {
      console.log(error);
    });
  }
  ngOnInit(): void {

  }
  warrantyClaim(){
    this.dataService.saveWarrantyClaim(this.convertWarranty()).subscribe(data => { console.log(data)},error => {console.log(error)});
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
    this.warrantyClaimModel.product= this.warrantyClaimFrom.value.product;
    this.warrantyClaimModel.serial= this.warrantyClaimFrom.value.serial;
    this.warrantyClaimModel.modelProduct= this.warrantyClaimFrom.value.modelProduct;
    console.log(this.warrantyClaimModel)
    return this.warrantyClaimModel;
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
          this.lstDistrict = data;
        }, error => {
          console.log(error);
        });
    }
  }
}
