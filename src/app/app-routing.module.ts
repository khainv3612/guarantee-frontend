import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YeucaubaohanhComponent } from './view/yeucaubaohanh/yeucaubaohanh.component';
import { TracuubaohanhComponent } from './view/tracuubaohanh/tracuubaohanh.component';
import { QuanlyyeucaubhComponent } from './view/quanlyyeucaubh/quanlyyeucaubh.component';

const routes: Routes = [{path:'yeucaubaohanh',component: YeucaubaohanhComponent},
                        {path:'tra-cuu-yeu-cau-bao-hanh.html',component: TracuubaohanhComponent},
                        {path:'quanlyyeucau.html',component: QuanlyyeucaubhComponent},
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
