import {Component, Injectable} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SignInComponent} from '../Auth/sign-in/sign-in.component';
import {Station} from "../model/Station";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LoginRequest} from "../model/LoginRequest";
import {Observable} from "rxjs";
import {Account} from "../model/Account";

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
    return sessionStorage.getItem('role') != null;
  }

  registerStation(station: Station) {
    return this.httpClient.post(this.urlStation + 'register', station);
  }

  login(user: LoginRequest): Observable<Account> {
    return this.httpClient.post<Account>(this.urlAuth + 'login', user);
  }

}
