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
import {KichHoatBaoHanhComponent} from './view/kich-hoat-bao-hanh/kich-hoat-bao-hanh.component';
import {TraCuuHanBaoHanhComponent} from './view/tra-cuu-han-bao-hanh/tra-cuu-han-bao-hanh.component';
import {TraCuuYeuCauBaoHanhComponent} from './view/tra-cuu-yeu-cau-bao-hanh/tra-cuu-yeu-cau-bao-hanh.component';
import {TramBaoHanhComponent} from './view/tram-bao-hanh/tram-bao-hanh.component';
import {YeuCauBaoHanhComponent} from './view/yeu-cau-bao-hanh/yeu-cau-bao-hanh.component';
import {ViewStationComponent} from './view/view-station/view-station.component';
import * as $ from 'jquery';
import {ManageStationComponent} from './manage/manage-station/manage-station.component';
import {MatIconModule} from '@angular/material/icon';
import {AdminGuard} from "./Guard/admin/admin.guard";
import {TecnicianGuard} from "./Guard/technician/tecnician.guard";
import {SalerGuard} from "./Guard/saler/saler.guard";
import { KetQuaTraCuuHanBaoHanhComponent } from './view/ket-qua-tra-cuu-han-bao-hanh/ket-qua-tra-cuu-han-bao-hanh.component';

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
    TraCuuYeuCauBaoHanhComponent,
    TramBaoHanhComponent,
    YeuCauBaoHanhComponent,
    ViewStationComponent,
    ManageStationComponent,
    KetQuaTraCuuHanBaoHanhComponent,
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
      {path: 'chinhsachhd', component: ViewchinhsachhdComponent},
      {path: 'station', component: ViewStationComponent},
      {path: 'kich-hoat-bao-hanh', component: KichHoatBaoHanhComponent},
      {path: 'tra-cuu-han-bao-hanh', component: TraCuuHanBaoHanhComponent},
      {path: 'yeu-cau-bao-hanh', component: YeuCauBaoHanhComponent},
      {path: 'tra-cuu-yeu-cau-bao-hanh', component: TraCuuYeuCauBaoHanhComponent},
      {path: 'tram-bao-hanh', component: TramBaoHanhComponent},
      {path: 'ket-qua-tra-cuu-han-bao-hanh', component: KetQuaTraCuuHanBaoHanhComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
