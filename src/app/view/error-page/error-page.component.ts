import { Component, OnInit } from '@angular/core';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  phoneNumberContact: string;
  constructor() {
    this.phoneNumberContact = environment.PHONE_CONTACT;
  }

  ngOnInit(): void {
  }

}
