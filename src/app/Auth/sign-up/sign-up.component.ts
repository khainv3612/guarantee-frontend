import {Component, OnInit} from '@angular/core';
import {DataService} from "../../service/data-service";
import {Province} from "../../model/Province";
import {District} from "../../model/District";
import {Ward} from "../../model/Ward";
import {TypeStation} from "../../model/TypeStation";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Station} from "../../model/Station";
import {AuthService} from "../../service/auth-service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  stationDTO: Station;
  capcha: number;
  stationForm: FormGroup;
  lstProvince: Province[];
  lstDistrict: District[];
  lstWard: Ward[];
  lstTypeStation: TypeStation[];
  isNeedCheck = false;
  isVerify = true;
  isPassMatch = true;

  constructor(private dataService: DataService, private authService: AuthService) {
    this.stationForm = new FormGroup({
      // username: new FormControl('', [Validators.required]),
      object: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      password: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      rePassword: new FormControl(),
      province: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      district: new FormControl('', [Validators.required]),
      ward: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      legal: new FormControl(''),
      represent: new FormControl(''),
      //CMTND/CCCD
      serial: new FormControl('', [Validators.required]),
      taxcode: new FormControl(''),
      license: new FormControl(''),
      bank: new FormControl(''),
      banknumber: new FormControl(''),
      beneficiary: new FormControl(''),
      verifyCode: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.getProvince();
    this.getTypeStation();
    this.getCapcha(100000, 999999);
  }

  getCapcha(min, max) {
    this.capcha = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getProvince() {
    this.dataService.getProvince().subscribe(data => {
        this.lstProvince = data;
      },
      error => {
        console.log('error when get list province');
        console.log(error);
      })
  }

  getDistrict() {
    this.dataService.getDistrict(this.stationForm.get('province').value).subscribe(result => {
      this.lstDistrict = result;
      this.stationForm.get('district').setValue(this.lstDistrict[0].name);
      this.getWard();
    }, error => {
      console.log(error);
    })


  }

  getWard() {
    this.dataService.getWard(this.stationForm.get('province').value, this.stationForm.get('district').value).subscribe(result => {
      this.lstWard = result;
    }, error => {
      console.log(error);
    })
  }

  getTypeStation() {
    this.dataService.getTypeStation().subscribe(data => {
      this.lstTypeStation = data;
    }, error => {
      console.log(error);
    })
  }

  onSubmit() {
    const message = document.getElementById('msg-register');
    this.isNeedCheck = true;
    if (!this.validateForm()) {
      this.getCapcha(100000, 999999);
      return;
    }
    this.stationDTO = this.stationForm.value;
    this.authService.registerStation(this.stationDTO).subscribe(result => {
      console.log('success');
      this.reset();
      this.getCapcha(100000, 999999);
      message.style.display = 'block';
      setTimeout(() => {
        message.style.display = 'none';
      }, 3000);
    }, error => {
      console.log(error);
    });
  }

  validateForm(): boolean {
    if (!this.stationForm.valid) {
      return false;
    }
    this.isPassMatch = this.stationForm.get('password').value == this.stationForm.get('rePassword').value;
    if (!this.isPassMatch)
      return false;
    if (this.stationForm.get('verifyCode').value != '') {
      this.isVerify = this.stationForm.get('verifyCode').value == this.capcha.toString();
      if (!this.isVerify)
        return false;
    }
    return true;
  }

  reset() {
    this.isNeedCheck = false;
    this.stationForm.reset();
    this.getCapcha(100000, 999999);
  }

}
