import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {WarrantyCard} from '../model/WarrantyCard';
import {Observable} from 'rxjs';
import {WarrantyActiveDTO} from '../model/WarrantyActiveDTO';

@Injectable({
  providedIn: 'root'
})
export class WarrantyCardService {
  urlWarrantyCard = environment.URL_API_WARRANTY_CARD;

  constructor(private httpClient: HttpClient) {
  }

  activeWarranty(warrantyActiveDTO: WarrantyActiveDTO): Observable<string> {
    return this.httpClient.post<any>(this.urlWarrantyCard + 'active', warrantyActiveDTO);
  }

  searchWarranty(serialNumber: string): Observable<WarrantyCard> {
    return this.httpClient.get<any>(this.urlWarrantyCard + serialNumber);
  }

  uploadDataWarranty(file: File): Observable<any> {
    let headers =  new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.httpClient.post<any>(this.urlWarrantyCard + 'uploadDataWarranty', formData, {
      headers
    });
  }
}
