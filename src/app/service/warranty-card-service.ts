import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
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
}
