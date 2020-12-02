import { Component, OnInit } from '@angular/core';
import {WarrantyClaimModel} from '../../model/WarrantyClaimModel';
import { DataService } from 'src/app/service/data-service';

@Component({
  selector: 'app-quanlyyeucaubh',
  templateUrl: './quanlyyeucaubh.component.html',
  styleUrls: ['./quanlyyeucaubh.component.css']
})
export class QuanlyyeucaubhComponent implements OnInit {

  lstModel: WarrantyClaimModel[];
  warrantyClaimModel :WarrantyClaimModel;
  dataService:DataService;

  constructor(dataService:DataService) {
    this.dataService = dataService;
   }

  ngOnInit(): void {
    this.lstModel = [];
  }

  searchBySerial(){
   let serial =(<HTMLInputElement> document.getElementById("txtSearch")).value;
   if(!serial || serial == ""){
     serial = "all";
     this.dataService.getAllWarrantyClaim().subscribe(result => {this.lstModel = result;});
   }
   if(serial != "all"){
    this.dataService.getWarrantyClaim(serial).subscribe(result => {this.warrantyClaimModel = result;this.lstModel.push(this.warrantyClaimModel)});
   }
  }
}
