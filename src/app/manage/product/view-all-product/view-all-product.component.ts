import {Component, OnInit} from '@angular/core';
import {Product} from '../../../model/Product';
import {ProductService} from '../../../service/product-service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  formFilter: FormGroup = new FormGroup({
    txtSearch: new FormControl(),
  });
  lstProduct: Product[] = [];
  lstAllProduct: Product[] = [];

  constructor(private productService: ProductService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAllProduct();
  }

  getAllProduct() {
    this.productService.getAll().subscribe(value => {
      this.lstProduct = this.lstAllProduct = value;
    }, error => {
      this.router.navigate(['error']).then();
    });
  }

  filter() {
    let txtSearch = this.formFilter.controls.txtSearch.value.toUpperCase();
    this.lstProduct = this.lstAllProduct.filter((p) => p.name.toUpperCase().includes(txtSearch) || p.productCode.toUpperCase().includes(txtSearch));
  }

  viewDetail(product: Product) {
    this.router.navigate(['quan-ly/chi-tiet-san-pham'], {
      state: {
        product: JSON.stringify(product),
      }
    }).then();
  }

  delete(productId: number) {
    if (!confirm('ARE YOU SURE?')) {
      return;
    }
    return this.productService.delete(productId).subscribe(result => {
      alert('XÓA THÀNH CÔNG');
      this.ngOnInit();
    }, error => {
      this.router.navigate(['error']).then();
    });
  }

  viewCreate() {
    this.router.navigate(['quan-ly/tao-san-pham']).then();
  }

  viewUpdate(p: Product) {
    this.router.navigate(['quan-ly/tao-san-pham'], {
      state: {
        product: JSON.stringify(p),
      }
    }).then();
  }
}
