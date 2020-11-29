import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../service/auth-service';
import {ForgotPassComponent} from '../forgot-pass/forgot-pass.component';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {LoginRequest} from "../../model/LoginRequest";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm: FormGroup;
  loginPayload: LoginRequest;
  @Output() submitClicked = new EventEmitter<any>();

  constructor(public dialogRef: MatDialogRef<SignInComponent>, private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
    this.loginPayload = {
      username: '',
      password: ''
    };
  }

  ngOnInit(): void {
  }

  onSubmit() {
    // this.validateForm();
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    if (!this.loginForm.valid) {
      console.log('Error;');
      return;
    }
    this.authService.login(this.loginPayload).subscribe(data => {
      if (data) {
        console.log('login success');
        this.dialogRef.close();
        this.router.navigateByUrl('/homes');
      } else {
        console.log('Login failed');
      }
    });
  }

  openDialogForgot(): void {
    this.dialogRef.close();
    this.authService.openDialog(ForgotPassComponent);
  }

}
