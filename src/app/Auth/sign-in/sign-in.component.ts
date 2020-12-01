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
  isValidate = true;
  isLogined = true;
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
    if (!this.validateForm()) {
      return;
    }
    this.loginPayload.username = this.loginForm.get('username').value;
    this.loginPayload.password = this.loginForm.get('password').value;
    this.authService.login(this.loginPayload).subscribe(data => {

      this.isLogined = true;
      sessionStorage.setItem('user', JSON.stringify({'username': data.username, 'role': data.role}));
      this.dialogRef.close();
      this.router.navigateByUrl('');
    }, error => {
      sessionStorage.removeItem('user');
      sessionStorage.setItem('user', 'anonymous');
      this.isLogined = false;
    });
  }

  validateForm(): boolean {
    return this.isValidate = this.loginForm.valid;
  }

  openDialogForgot(): void {
    this.dialogRef.close();
    this.authService.openDialog(ForgotPassComponent);
  }

}
