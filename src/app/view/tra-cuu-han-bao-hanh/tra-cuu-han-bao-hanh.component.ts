import {Component, OnInit} from '@angular/core';
import {DataService} from '../../service/data-service';
import {WarrantyCardService} from '../../service/warranty-card-service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tra-cuu-han-bao-hanh',
  templateUrl: './tra-cuu-han-bao-hanh.component.html',
  styleUrls: ['./tra-cuu-han-bao-hanh.component.css']
})
export class TraCuuHanBaoHanhComponent implements OnInit {

  captcha: number;
  isVerify = true;
  isValidFormSubmitted = null;

  searchWarrantyForm: FormGroup = new FormGroup({
    serialNumber: new FormControl('', [
      Validators.required
    ]),
    verifyCode: new FormControl('', [
      Validators.required
    ]),
  });

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.getCaptcha(100000, 999999);
  }

  getCaptcha(min, max) {
    this.captcha = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  reset() {
    this.isValidFormSubmitted = null;
    this.searchWarrantyForm.reset();
    this.getCaptcha(100000, 999999);
  }

  onSubmit() {
    this.isValidFormSubmitted = false;
    this.isVerify = this.captcha == this.searchWarrantyForm.get('verifyCode').value;
    if (!this.isVerify || this.searchWarrantyForm.invalid) {
      this.getCaptcha(100000, 999999);
      return;
    }
    const serialNumber = this.searchWarrantyForm.get('serialNumber').value;
    this.router.navigate(['ket-qua-tra-cuu-han-bao-hanh'], {queryParams: {serialNumber: serialNumber}}).then((e) => {
      console.log('Navigation is successful!');
    });
  }
}
