import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Province} from '../../model/Province';
import {District} from '../../model/District';
import {Ward} from '../../model/Ward';
import {WarrantyActiveDTO} from '../../model/WarrantyActiveDTO';
import {WarrantyCardService} from '../../service/warranty-card-service';
import {DatePipe} from '@angular/common';
import {getAngularClassTransformerFactory} from '@angular/compiler-cli/src/transformers/r3_transform';

@Component({
  selector: 'app-kich-hoat-bao-hanh',
  templateUrl: './kich-hoat-bao-hanh.component.html',
  styleUrls: ['./kich-hoat-bao-hanh.component.css']
})
export class KichHoatBaoHanhComponent implements OnInit {
  dataService: DataService;
  warrantyCardService: WarrantyCardService;

  warrantyActiveDTO: WarrantyActiveDTO = new WarrantyActiveDTO();
  warrantyActiveForm: FormGroup = new FormGroup({
    fullName: new FormControl('', [
      Validators.required, Validators.maxLength(50)
    ]),
    phone: new FormControl('', [
      Validators.required, Validators.maxLength(15),
      Validators.pattern('(0)([1-9]+)\\b')
    ]),
    province: new FormControl('', [
      Validators.required
    ]),
    district: new FormControl('', [
      Validators.required
    ]),
    ward: new FormControl('', [
      Validators.required
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.maxLength(100)
    ]),
    serialNumber: new FormControl('', [
      Validators.required
    ]),
    soldDate: new FormControl('', []),
    storeAddr: new FormControl('', []),
    storePhone: new FormControl('', []),
    verifyCode: new FormControl('', [
      Validators.required
    ]),
  });
  lstProvince: Province[];
  lstDistrict: District[];
  lstWard: Ward[];
  captcha: number;
  isValidFormSubmitted = null;
  isVerify = true;

  constructor(dataService: DataService, warrantyCardService: WarrantyCardService) {
    this.dataService = dataService;
    this.warrantyCardService = warrantyCardService;
  }

  ngOnInit(): void {
    this.getCaptcha(100000, 999999);
    this.getProvince();
  }

  getCaptcha(min, max) {
    this.captcha = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getProvince() {
    this.dataService.getProvince().subscribe(data => {
        this.lstProvince = data;
      },
      error => {
        console.log('error when get list province');
        console.log(error);
      });
  }

  getDistrict() {
    this.lstWard = [];
    this.dataService.getDistrict(this.warrantyActiveForm.get('province').value).subscribe(result => {
      this.lstDistrict = result;
    }, error => {
      console.log(error);
    });
  }

  getWard() {
    this.dataService.getWard(this.warrantyActiveForm.get('province').value, this.warrantyActiveForm.get('district').value).subscribe(result => {
      this.lstWard = result;
    }, error => {
      console.log(error);
    });
  }

  validateForm(): boolean {
    if (this.warrantyActiveForm.get('verifyCode').value != '') {
      let isVerify = this.warrantyActiveForm.get('verifyCode').value == this.captcha.toString();
      if (!isVerify) {
        return false;
      }
    }
    return true;
  }

  reset() {
    this.isValidFormSubmitted = null;
    this.warrantyActiveForm.reset();
    this.getCaptcha(100000, 999999);
  }

  onSubmit() {
    this.isValidFormSubmitted = false;
    this.isVerify = this.captcha == this.warrantyActiveForm.get('verifyCode').value;
    if (!this.isVerify || this.warrantyActiveForm.invalid) {
      this.getCaptcha(100000, 999999);
      return;
    }
    this.isValidFormSubmitted = true;
    this.warrantyActiveDTO = this.warrantyActiveForm.value;
    this.warrantyCardService.activeWarranty(this.warrantyActiveDTO).subscribe(result => {
      alert("Đăng ký bảo hành thành công")
      this.reset();
    }, error => {
      alert(error.error);
    })
  }

}
