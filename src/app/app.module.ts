import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {SignUpComponent} from './Auth/sign-up/sign-up.component';
import {SignInComponent} from './Auth/sign-in/sign-in.component';
import {ForgotPassComponent} from './Auth/forgot-pass/forgot-pass.component';
import {ChinhsachhdComponent} from './manage/chinhsachhd/chinhsachhd.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {EditorModule} from '@tinymce/tinymce-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ViewchinhsachhdComponent} from './view/viewchinhsachhd/viewchinhsachhd.component';
import {KichHoatBaoHanhComponent} from './view/kich-hoat-bao-hanh/kich-hoat-bao-hanh.component';
import {TraCuuHanBaoHanhComponent} from './view/tra-cuu-han-bao-hanh/tra-cuu-han-bao-hanh.component';
import {TramBaoHanhComponent} from './view/tram-bao-hanh/tram-bao-hanh.component';
import {ViewStationComponent} from './view/view-station/view-station.component';
import {ManageStationComponent} from './manage/manage-station/manage-station.component';
import {MatIconModule} from '@angular/material/icon';
import { KetQuaTraCuuHanBaoHanhComponent } from './view/ket-qua-tra-cuu-han-bao-hanh/ket-qua-tra-cuu-han-bao-hanh.component';
import { CreateProductComponent } from './manage/product/create-product/create-product.component';
import { ViewAllProductComponent } from './manage/product/view-all-product/view-all-product.component';
import { ViewDetailProductComponent } from './manage/product/view-detail-product/view-detail-product.component';
import { ErrorPageComponent } from './view/error-page/error-page.component';
import {TracuubaohanhComponent} from './view/tracuubaohanh/tracuubaohanh.component';
import {YeucaubaohanhComponent} from './view/yeucaubaohanh/yeucaubaohanh.component';
import {QuanlyyeucaubhComponent} from './manage/quanlyyeucaubh/quanlyyeucaubh.component';
import { HomeComponent } from './home/home.component';
import {ManageUserComponent} from './manage/User/manage-user/manage-user.component';
import {CreateUserComponent} from './manage/User/create-user/create-user.component';
import {EditUserComponent} from './manage/User/edit-user/edit-user.component';

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
    KichHoatBaoHanhComponent,
    TraCuuHanBaoHanhComponent,
    TramBaoHanhComponent,
    ViewStationComponent,
    ManageStationComponent,
    KetQuaTraCuuHanBaoHanhComponent,
    CreateProductComponent,
    ViewAllProductComponent,
    ViewDetailProductComponent,
    ErrorPageComponent,
    TracuubaohanhComponent,
    YeucaubaohanhComponent,
    QuanlyyeucaubhComponent,
    HomeComponent,
    ManageUserComponent,
    CreateUserComponent,
    EditUserComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    EditorModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
