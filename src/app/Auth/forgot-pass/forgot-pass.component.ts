import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {

  capcha: number;
  formForgot: FormGroup;

  constructor() {
    this.formForgot = new FormGroup({
      loginName: new FormControl(),
      verifyCode: new FormControl()
    })
  }

  ngOnInit(): void {
    this.getCapcha(100000, 999999);
  }

  getCapcha(min, max) {
    this.capcha = Math.floor(Math.random() * (max - min + 1)) + min;
  }

  onSubmit() {
  }

}
