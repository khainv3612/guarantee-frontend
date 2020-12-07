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
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EditorModule} from '@tinymce/tinymce-angular';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {ViewchinhsachhdComponent} from './view/viewchinhsachhd/viewchinhsachhd.component';
import {AuthGuard} from "./auth.guard";
import { YeucaubaohanhComponent } from './view/yeucaubaohanh/yeucaubaohanh.component';
import { TracuubaohanhComponent } from './view/tracuubaohanh/tracuubaohanh.component';
import { QuanlyyeucaubhComponent } from './view/quanlyyeucaubh/quanlyyeucaubh.component';
import {KichHoatBaoHanhComponent} from './view/kich-hoat-bao-hanh/kich-hoat-bao-hanh.component';
import {TraCuuHanBaoHanhComponent} from './view/tra-cuu-han-bao-hanh/tra-cuu-han-bao-hanh.component';
import {TraCuuYeuCauBaoHanhComponent} from './view/tra-cuu-yeu-cau-bao-hanh/tra-cuu-yeu-cau-bao-hanh.component';
import {TramBaoHanhComponent} from './view/tram-bao-hanh/tram-bao-hanh.component';
import {ViewStationComponent} from './view/view-station/view-station.component';
import * as $ from 'jquery';
import {ManageStationComponent} from './manage/manage-station/manage-station.component';
import {MatIconModule} from '@angular/material/icon';
import {AdminGuard} from "./Guard/admin/admin.guard";
import {TecnicianGuard} from "./Guard/technician/tecnician.guard";
import {SalerGuard} from "./Guard/saler/saler.guard";
import {KetQuaTraCuuHanBaoHanhComponent} from './view/ket-qua-tra-cuu-han-bao-hanh/ket-qua-tra-cuu-han-bao-hanh.component';
import {CreateProductComponent} from './manage/product/create-product/create-product.component';
import {ViewAllProductComponent} from './manage/product/view-all-product/view-all-product.component';
import {ViewDetailProductComponent} from './manage/product/view-detail-product/view-detail-product.component';
import {ErrorPageComponent} from './view/error-page/error-page.component';
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
    YeucaubaohanhComponent,
    ViewStationComponent,
    TracuubaohanhComponent,
    QuanlyyeucaubhComponent,
    KichHoatBaoHanhComponent,
    TraCuuHanBaoHanhComponent,
    TraCuuYeuCauBaoHanhComponent,
    TramBaoHanhComponent,
    ViewStationComponent,
    ManageStationComponent,
    KetQuaTraCuuHanBaoHanhComponent,
    CreateProductComponent,
    ViewAllProductComponent,
    ViewDetailProductComponent,
    ErrorPageComponent,
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
    RouterModule.forRoot([
      {path: 'home', component: ViewchinhsachhdComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'sign-in', component: SignInComponent},
      {path: 'manage/station', component: ManageStationComponent, canActivate: [SalerGuard]},
      {path: 'manage/chinhsachhd', component: ChinhsachhdComponent, canActivate: [TecnicianGuard]},
      {path: 'manage/user', component: ManageUserComponent, canActivate: [AdminGuard]},
      {path: 'manage/create-user', component: CreateUserComponent, canActivate: [AdminGuard]},
      {path: 'manage/edit-user', component: EditUserComponent, canActivate: [AdminGuard]},
      {path: 'chinhsachhd', component: ViewchinhsachhdComponent},
      {path: 'station', component: ViewStationComponent},
      {path: 'kich-hoat-bao-hanh', component: KichHoatBaoHanhComponent},
      {path: 'tra-cuu-han-bao-hanh', component: TraCuuHanBaoHanhComponent},
      {path: 'yeu-cau-bao-hanh', component: YeucaubaohanhComponent},
      {path: 'tra-cuu-yeu-cau-bao-hanh', component: TraCuuYeuCauBaoHanhComponent},
      {path: 'tram-bao-hanh', component: TramBaoHanhComponent},
      {path: 'ket-qua-tra-cuu-han-bao-hanh', component: KetQuaTraCuuHanBaoHanhComponent},
      {path: 'quan-ly/san-pham', component: ViewAllProductComponent},
      {path: 'quan-ly/chi-tiet-san-pham', component: ViewDetailProductComponent},
      {path: 'quan-ly/tao-san-pham', component: CreateProductComponent},
      {path: 'error', component: ErrorPageComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
