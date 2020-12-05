import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YeucaubaohanhComponent } from './view/yeucaubaohanh/yeucaubaohanh.component';
import { TracuubaohanhComponent } from './view/tracuubaohanh/tracuubaohanh.component';
import { QuanlyyeucaubhComponent } from './view/quanlyyeucaubh/quanlyyeucaubh.component';
import {SignUpComponent} from './Auth/sign-up/sign-up.component';
import {SignInComponent} from './Auth/sign-in/sign-in.component';
import {ChinhsachhdComponent} from './manage/chinhsachhd/chinhsachhd.component';
import {ViewchinhsachhdComponent} from './view/viewchinhsachhd/viewchinhsachhd.component';
import {ViewStationComponent} from './view/view-station/view-station.component';
import {KichHoatBaoHanhComponent} from './view/kich-hoat-bao-hanh/kich-hoat-bao-hanh.component';
import {TraCuuHanBaoHanhComponent} from './view/tra-cuu-han-bao-hanh/tra-cuu-han-bao-hanh.component';
import {TramBaoHanhComponent} from './view/tram-bao-hanh/tram-bao-hanh.component';
import {ManageStationComponent} from './manage/manage-station/manage-station.component';
import {TecnicianGuard} from "./Guard/technician/tecnician.guard";
import {SalerGuard} from "./Guard/saler/saler.guard";
import { KetQuaTraCuuHanBaoHanhComponent } from './view/ket-qua-tra-cuu-han-bao-hanh/ket-qua-tra-cuu-han-bao-hanh.component';
import { CreateProductComponent } from './manage/product/create-product/create-product.component';
import { ViewAllProductComponent } from './manage/product/view-all-product/view-all-product.component';
import { ViewDetailProductComponent } from './manage/product/view-detail-product/view-detail-product.component';
import { ErrorPageComponent } from './view/error-page/error-page.component';

const routes: Routes = [{ path: 'yeu-cau-bao-hanh', component: YeucaubaohanhComponent },
{ path: 'tra-cuu-yeu-cau-bao-hanh', component: TracuubaohanhComponent },
{ path: 'quan-ly-yeu-cau', component: QuanlyyeucaubhComponent },
{ path: 'home', component: ViewchinhsachhdComponent },
{ path: 'sign-up', component: SignUpComponent },
{ path: 'sign-in', component: SignInComponent },
{ path: 'manage/station', component: ManageStationComponent, canActivate: [SalerGuard] },
{ path: 'manage/chinhsachhd', component: ChinhsachhdComponent, canActivate: [TecnicianGuard] },
{ path: 'chinhsachhd', component: ViewchinhsachhdComponent },
{ path: 'station', component: ViewStationComponent },
{ path: 'kich-hoat-bao-hanh', component: KichHoatBaoHanhComponent },
{ path: 'tra-cuu-han-bao-hanh', component: TraCuuHanBaoHanhComponent },
{ path: 'tram-bao-hanh', component: TramBaoHanhComponent },
{ path: 'ket-qua-tra-cuu-han-bao-hanh', component: KetQuaTraCuuHanBaoHanhComponent },
{ path: 'quan-ly/san-pham', component: ViewAllProductComponent },
{ path: 'quan-ly/chi-tiet-san-pham', component: ViewDetailProductComponent },
{ path: 'quan-ly/tao-san-pham', component: CreateProductComponent },
{ path: 'error', component: ErrorPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
