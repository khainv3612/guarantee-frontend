import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Province} from "../model/Province";
import {environment} from "../../environments/environment";
import {District} from "../model/District";
import {Ward} from "../model/Ward";
import {TypeStation} from "../model/TypeStation";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  urlProvince = environment.URL_API_PROVINCE;
  urlDistrict = environment.URL_API_DISTRICT;
  urlWard = environment.URL_API_WARD;
  urlTypeStation = environment.URL_API_TYPESTATION;

  constructor(private httpClient: HttpClient) {
  }

  getProvince(): Observable<Province[]> {
    return this.httpClient.get<Province[]>(this.urlProvince + 'all');
  }

  getDistrict(id: number): Observable<District[]> {
    return this.httpClient.get<District[]>(this.urlDistrict + 'provinceid/' + id);
  }

  getWard(id: number): Observable<Ward[]> {
    return this.httpClient.get<Ward[]>(this.urlWard + 'districtid/' + id);
  }

  getTypeStation(): Observable<TypeStation[]> {
    return this.httpClient.get<TypeStation[]>(this.urlTypeStation + 'all');
  }
}
