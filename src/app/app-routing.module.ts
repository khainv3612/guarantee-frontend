import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YeucaubaohanhComponent } from './view/yeucaubaohanh/yeucaubaohanh.component';

const routes: Routes = [{path:'yeucaubaohanh',component: YeucaubaohanhComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
