import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Product} from '../../../model/Product';

@Component({
  selector: 'app-view-detail-product',
  templateUrl: './view-detail-product.component.html',
  styleUrls: ['./view-detail-product.component.css']
})
export class ViewDetailProductComponent implements OnInit {

  product: Product = new Product();
  routeState: any;

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.routeState = this.router.getCurrentNavigation().extras.state;
      if (this.routeState) {
        this.product = this.routeState.product ? JSON.parse(this.routeState.product) : '';
      }
    }
  }

  ngOnInit(): void {
  }

}
