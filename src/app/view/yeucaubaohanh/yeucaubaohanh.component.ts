import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WarrantyClaimModel} from '../../model/WarrantyClaimModel';

@Component({
  selector: 'app-yeucaubaohanh',
  templateUrl: './yeucaubaohanh.component.html',
  styleUrls: ['./yeucaubaohanh.component.css']
})
export class YeucaubaohanhComponent implements OnInit {

  warrantyClaimFrom: FormGroup;
  warrantyClaimModel: WarrantyClaimModel = new WarrantyClaimModel();

  constructor() { 
    this.warrantyClaimFrom = new FormGroup({
      customerName: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      address: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      phone: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      phone2: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      email: new FormControl('',[Validators.required,Validators.email,Validators.required,Validators.maxLength(30),Validators.minLength(5)]),
      productName: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      modelProduct: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      serial: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
      description: new FormControl('',[Validators.required,Validators.maxLength(200),Validators.minLength(5)])
    })
  }
  ngOnInit(): void {

  }
  warrantyClaim(){
    console.log("aa");
  }
}
