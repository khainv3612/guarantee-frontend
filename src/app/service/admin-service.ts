import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Policy} from '../model/Policy';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Account} from "../model/Account";

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  urlPolicy = environment.URL_API_POLICY;
  urlStation = environment.URL_API_STATION;
  urlAccount = environment.URL_API_ACCOUNT;

  constructor(private httpClient: HttpClient) {
  }

  getPolicy(id: number): Observable<Policy> {
    return this.httpClient.get<Policy>(this.urlPolicy + id);
  }

  savePolicy(policy: Policy) {
    return this.httpClient.post(this.urlPolicy + 'save-policy', policy);
  }

  acceptStation(id: number) {
    return this.httpClient.post(this.urlStation + 'accept', id);
  }

  removeStation(id: number) {
    return this.httpClient.post(this.urlStation + 'remove', id);
  }

  getAllUser(): Observable<Account[]> {
    return this.httpClient.get<Account[]>(this.urlAccount + 'all');
  }

  deleteAccount(id: number): Observable<boolean> {
    return this.httpClient.post<boolean>(this.urlAccount + 'delete', id);
  }

  createAccount(account: Account) {
    return this.httpClient.post(this.urlAccount + 'create', account);
  }
}
