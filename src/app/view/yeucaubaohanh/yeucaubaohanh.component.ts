import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WarrantyClaimModel} from '../../model/WarrantyClaimModel';
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
    })
  }
  ngOnInit(): void {

  }
  warrantyClaim(){
    console.log(this.warrantyClaimFrom);
    this.dataService.saveWarrantyClaim(this.convertWarranty());
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
}
