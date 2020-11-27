import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {AuthService} from '../../service/auth-service';
import {ForgotPassComponent} from '../forgot-pass/forgot-pass.component';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

    @Output() submitClicked = new EventEmitter<any>();

    constructor(public dialogRef: MatDialogRef<SignInComponent>, private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    openDialogForgot(): void {
        this.dialogRef.close();
        this.authService.openDialog(ForgotPassComponent);
    }

}
