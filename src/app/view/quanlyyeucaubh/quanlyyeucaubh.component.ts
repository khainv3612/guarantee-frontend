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
    this.searchAll();
    this.lstModel = [];
  }

  searchBySerial(){
   let serial =(<HTMLInputElement> document.getElementById("txtSearch")).value;
   if(!serial || serial == ""){
     serial = "all";
     this.searchAll();
   }
   if(serial != "all"){
    this.dataService.getWarrantyClaim(serial).subscribe(result => {this.warrantyClaimModel = result;this.lstModel.push(this.warrantyClaimModel)});
   }
  }
  searchAll(){
    this.dataService.getAllWarrantyClaim().subscribe(result => {this.lstModel = result;});
  }
  acceptBtn(event){
   let serial = event.target.id;
   this.dataService.acceptRequestWarranty(serial).subscribe(result => {this.lstModel = this.lstModel.filter(p => (!p.serial.includes(serial)));});
   
  }
  rejectBtn(event){
    let serial = event.target.id;
    this.dataService.rejectRequestWarranty(serial).subscribe(result => {this.lstModel = this.lstModel.filter(p => (!p.serial.includes(serial)));});
  }
}
