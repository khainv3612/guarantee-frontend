import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {WarrantyClaimModel} from '../../model/WarrantyClaimModel';
import {Province} from '../../model/Province';
import {Ward} from '../../model/Ward';
import {District} from '../../model/District';
import { DataService } from 'src/app/service/data-service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-yeucaubaohanh',
  templateUrl: './yeucaubaohanh.component.html',
  styleUrls: ['./yeucaubaohanh.component.css']
})
export class YeucaubaohanhComponent implements OnInit {

  warrantyClaimFrom: FormGroup;
  warrantyClaimModel: WarrantyClaimModel = new WarrantyClaimModel();
  lstAllProvince: Province[];
  lstDistrict: District[];
  lstWard: Ward[];
  currentDistrict: string = '';
  isSubmitted = false;
  captcha: number;
  isVerify: boolean = false;

  constructor(private dataService: DataService,
              private router: Router) {
    this.warrantyClaimFrom = new FormGroup({
      customerName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      phone2: new FormControl('', []),
      email: new FormControl('', []),
      serial: new FormControl('', []),
      description: new FormControl('', [Validators.required]),
      province: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      ward: new FormControl('', [Validators.required]),
      verifyCode: new FormControl('', [Validators.required])
    });
    this.dataService.getProvince().subscribe(data => {
      this.lstAllProvince = data;
    }, error => {
      console.log(error);
    });
  }
  ngOnInit(): void {
    this.getCaptcha(100000, 999999);
  }
  warrantyClaim(){
    this.isVerify = this.captcha == this.warrantyClaimFrom.get('verifyCode').value;
    if (!this.isVerify || this.warrantyClaimFrom.invalid) {
      this.getCaptcha(100000, 999999);
      return;
    }
    this.dataService.checkSerial(this.warrantyClaimFrom.get('serial').value).subscribe(result => {
      this.isSubmitted = true;
      this.sendRequest();
      this.resetData();
    }, error => {
      if(confirm("Không tìm thấy mã bảo hành! Bạn vẫn muốn gửi yêu cầu ?")) {
        this.isSubmitted = true;
        this.sendRequest();
        this.resetData();
      } else {
        this.getCaptcha(100000, 999999);
      }
    });
  }

  sendRequest() {
    this.warrantyClaimModel = this.warrantyClaimFrom.value;
    this.dataService.saveWarrantyClaim(this.warrantyClaimModel).subscribe(data => {
      this.resetData();
      alert("Xin cảm ơn! Yêu cầu của bạn đã được tiếp nhận");
    }, error => {
      this.router.navigate(['error']).then();
    });
  }

  resetData() {
    this.isSubmitted = false;
    this.getCaptcha(100000, 999999);
    this.warrantyClaimFrom.reset();
  }

  getCaptcha(min, max) {
    this.captcha = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  boxselect(name:String,event:any){
    let value = event.target.value;
    switch(name){
      case 'province':
        this.currentDistrict = value;
        this.dataService.getDistrict(value).subscribe(data => {
          this.lstDistrict = data;
        }, error => {
          this.router.navigate(['error']).then();
        });
        break;
      case 'district':
        this.dataService.getWard(this.currentDistrict,value).subscribe(data => {
          this.lstWard = data;
        }, error => {
          this.router.navigate(['error']).then();
        });
    }
  }
}
