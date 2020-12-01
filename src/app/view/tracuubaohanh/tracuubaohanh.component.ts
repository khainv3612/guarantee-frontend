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

  constructor(dataService: DataService) { 
    this.dataService =dataService;
    this.searchForm = new FormGroup ({
      serial: new FormControl('',[Validators.required,Validators.maxLength(50),Validators.minLength(5)]),
    });
  }

  ngOnInit(): void {
  }

  searchFormFn(){
    let serial = this.searchForm.value.serial.trym();
    this.dataService.getWarrantyClaim(serial).subscribe((result) => {
     this.warrantyClaimModel = result;
    }, (error) => {
      this.message = error;
      this.warrantyClaimModel = null;
    });
  }

}
