import {Component, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignInComponent} from '../Auth/sign-in/sign-in.component';
import {Station} from "../model/Station";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LoginRequest} from "../model/LoginRequest";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  urlStation = environment.URL_API_STATION;
  urlAuth = environment.URL_API_AUTH;

  constructor(public dialog: MatDialog, private httpClient: HttpClient) {
  }

  openDialog(comp: any): void {
    const dialogRef = this.dialog.open(comp, {
        width: 'auto',
        // data: post,
        height: 'auto',
        // state: post
      }
    );

    dialogRef.afterClosed().subscribe(result => {
    });

    // const dialogSubmitSubscription =
    //     dialogRef.componentInstance.submitClicked.subscribe(() => {
    //         dialogSubmitSubscription.unsubscribe();
    //     });

  }

  isAuthenticated(): boolean {
    return sessionStorage.retrieve('token') != null;
  }

  registerStation(station: Station) {
    return this.httpClient.post(this.urlStation + 'register', station);
  }

  login(user: LoginRequest) {
    return this.httpClient.post(this.urlAuth + 'login', user);
  }

}
