import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';
import {Router} from "@angular/router";

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  phoneNumberContact: string;
  errorMessage = null;
  routeState: any;
  constructor(private router: Router) {
    this.phoneNumberContact = environment.PHONE_CONTACT;
    if (this.router.getCurrentNavigation().extras.state) {
      this.routeState = this.router.getCurrentNavigation().extras.state;
      if (this.routeState) {
        this.errorMessage = this.routeState.errorMessage ? JSON.parse(this.routeState.errorMessage) : '';
      }
    }
  }

  ngOnInit(): void {
  }

}
