import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {YeucaubaohanhComponent} from './view/yeucaubaohanh/yeucaubaohanh.component';
import {QuanlyyeucaubhComponent} from './manage/quanlyyeucaubh/quanlyyeucaubh.component';
import {ViewchinhsachhdComponent} from './view/viewchinhsachhd/viewchinhsachhd.component';
import {SignUpComponent} from './Auth/sign-up/sign-up.component';
import {SignInComponent} from './Auth/sign-in/sign-in.component';
import {ManageStationComponent} from './manage/manage-station/manage-station.component';
import {SalerGuard} from './Guard/saler/saler.guard';
import {ChinhsachhdComponent} from './manage/chinhsachhd/chinhsachhd.component';
import {TecnicianGuard} from './Guard/technician/tecnician.guard';
import {ViewStationComponent} from './view/view-station/view-station.component';
import {KichHoatBaoHanhComponent} from './view/kich-hoat-bao-hanh/kich-hoat-bao-hanh.component';
import {TraCuuHanBaoHanhComponent} from './view/tra-cuu-han-bao-hanh/tra-cuu-han-bao-hanh.component';
import {TramBaoHanhComponent} from './view/tram-bao-hanh/tram-bao-hanh.component';
import {KetQuaTraCuuHanBaoHanhComponent} from './view/ket-qua-tra-cuu-han-bao-hanh/ket-qua-tra-cuu-han-bao-hanh.component';
import {ViewAllProductComponent} from './manage/product/view-all-product/view-all-product.component';
import {ViewDetailProductComponent} from './manage/product/view-detail-product/view-detail-product.component';
import {CreateProductComponent} from './manage/product/create-product/create-product.component';
import {ErrorPageComponent} from './view/error-page/error-page.component';
import {TracuubaohanhComponent} from './view/tracuubaohanh/tracuubaohanh.component';
import {HomeComponent} from "./home/home.component";
import {ManageUserComponent} from "./manage/User/manage-user/manage-user.component";
import {CreateUserComponent} from "./manage/User/create-user/create-user.component";
import {EditUserComponent} from "./manage/User/edit-user/edit-user.component";
import {AdminGuard} from "./Guard/admin/admin.guard";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'chinh-sach-huong-dan', component: ViewchinhsachhdComponent},
  {path: 'tram-bao-hanh', component: ViewStationComponent},
  {path: 'kich-hoat-bao-hanh', component: KichHoatBaoHanhComponent},
  {path: 'tra-cuu-han-bao-hanh', component: TraCuuHanBaoHanhComponent},
  {path: 'tram-bao-hanh', component: TramBaoHanhComponent},
  {path: 'ket-qua-tra-cuu-han-bao-hanh', component: KetQuaTraCuuHanBaoHanhComponent},
  {path: 'yeu-cau-bao-hanh', component: YeucaubaohanhComponent},
  {path: 'tra-cuu-yeu-cau-bao-hanh', component: TracuubaohanhComponent},
  {path: 'quan-ly/san-pham', component: ViewAllProductComponent, canActivate: [SalerGuard, AdminGuard]},
  {path: 'quan-ly/chi-tiet-san-pham', component: ViewDetailProductComponent, canActivate: [SalerGuard, AdminGuard]},
  {path: 'quan-ly/tao-san-pham', component: CreateProductComponent, canActivate: [SalerGuard, AdminGuard]},
  {path: 'quan-ly/yeu-cau-bao-hanh', component: QuanlyyeucaubhComponent, canActivate: [TecnicianGuard, AdminGuard]},
  {path: 'quan-ly/tram-bao-hanh', component: ManageStationComponent, canActivate: [AdminGuard]},
  {path: 'quan-ly/chinh-sach-huong-dan', component: ChinhsachhdComponent, canActivate: [AdminGuard]},
  {path: 'quan-ly/tai-khoan', component: ManageUserComponent, canActivate: [AdminGuard]},
  {path: 'quan-ly/tao-tai-khoan', component: CreateUserComponent, canActivate: [AdminGuard]},
  {path: 'quan-ly/chinh-sua-thong-tin-tai-khoan', component: EditUserComponent, canActivate: [AdminGuard]},
  {path: 'error', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
