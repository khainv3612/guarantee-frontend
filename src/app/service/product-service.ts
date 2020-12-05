import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../model/Product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  urlProduct = environment.URL_API_PRODUCT;

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.urlProduct + 'getAll');
  }


  createOrUpdate(product: Product):Observable<Product> {
    return this.httpClient.post<Product>(this.urlProduct + 'createOrUpdate', product);
  }

  delete(productId: number) {
    return this.httpClient.delete<Product>(this.urlProduct + 'delete/'+ productId);
  }

}
