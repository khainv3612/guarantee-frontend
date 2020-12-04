import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Province} from "../model/Province";
import {environment} from "../../environments/environment";
import {District} from "../model/District";
import {Ward} from "../model/Ward";
import {TypeStation} from "../model/TypeStation";
import {Station} from '../model/Station';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlProvince = environment.URL_API_PROVINCE;
  urlDistrict = environment.URL_API_DISTRICT;
  urlWard = environment.URL_API_WARD;
  urlTypeStation = environment.URL_API_TYPESTATION;
  urlStation = environment.URL_API_STATION;
  urlWarranty = environment.URL_API_WARRANTYCLAIM;
  urlAccount = environment.URL_API_ACCOUNT;

  constructor(private httpClient: HttpClient) {
  }

  getProvince(): Observable<Province[]> {
    return this.httpClient.get<Province[]>(this.urlProvince + 'all');
  }

  getDistrict(proname: string): Observable<District[]> {
    return this.httpClient.get<District[]>(this.urlDistrict + 'get/' + proname);
  }

  getWard(proname: string, district: string): Observable<Ward[]> {
    return this.httpClient.get<Ward[]>(this.urlWard + 'get/' + proname + '/' + district);
  }

  getTypeStation(): Observable<TypeStation[]> {
    return this.httpClient.get<TypeStation[]>(this.urlTypeStation + 'all');
  }

  getAllStation(): Observable<Station[]> {
    return this.httpClient.get<Station[]>(this.urlStation + 'getall');
  }

  getAllStationPending(): Observable<Station[]> {
    return this.httpClient.get<Station[]>(this.urlStation + 'all-pending');
  }

  getAllStationAccepted(): Observable<Station[]> {
    return this.httpClient.get<Station[]>(this.urlStation + 'all-accepted');
  }

  getAllRoleUnderAdmin(): Observable<string[]> {
    return this.httpClient.get<string[]>(this.urlAccount + 'get-role-under-admin');
  }
}
