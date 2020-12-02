import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { DataTablesModule } from 'angular-datatables';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SignUpComponent} from './Auth/sign-up/sign-up.component';
import {SignInComponent} from './Auth/sign-in/sign-in.component';
import {ForgotPassComponent} from './Auth/forgot-pass/forgot-pass.component';
import {ChinhsachhdComponent} from './admin/chinhsachhd/chinhsachhd.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditorModule} from '@tinymce/tinymce-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ViewchinhsachhdComponent} from './view/viewchinhsachhd/viewchinhsachhd.component';
import {AuthGuard} from "./auth.guard";
import { YeucaubaohanhComponent } from './view/yeucaubaohanh/yeucaubaohanh.component';
import {ViewStationComponent} from './view/view-station/view-station.component';
import { TracuubaohanhComponent } from './view/tracuubaohanh/tracuubaohanh.component';
import { QuanlyyeucaubhComponent } from './view/quanlyyeucaubh/quanlyyeucaubh.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    SignInComponent,
    ForgotPassComponent,
    ChinhsachhdComponent,
    ViewchinhsachhdComponent,
    YeucaubaohanhComponent,
    ViewStationComponent,
    TracuubaohanhComponent,
    QuanlyyeucaubhComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    DataTablesModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    EditorModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: ViewchinhsachhdComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'sign-in', component: SignInComponent},
      {path: 'admin/chinhsachhd', component: ChinhsachhdComponent, canActivate: [AuthGuard]},
      {path: 'chinhsachhd', component: ViewchinhsachhdComponent},
      {path: 'station', component: ViewStationComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
