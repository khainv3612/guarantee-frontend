import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Policy} from '../model/Policy';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class AdminService {
    urlPolicy = environment.URL_API_POLICY;

    constructor(private httpClient: HttpClient) {
    }

     getPolicy(id: number): Observable<Policy> {
        return this.httpClient.get<Policy>(this.urlPolicy + id);
    }
}
