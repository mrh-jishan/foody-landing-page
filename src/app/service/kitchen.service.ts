import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LOCAL_STORAGE_TOKEN_KEY} from './constant';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  constructor(private http: HttpClient) {
  }

  add_kitchen(body): Observable<any> {
    return this.http.post(`${environment.api.host}/api/v1/user/kitchen`, body,
      {headers: new HttpHeaders({Authorization: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)})});
  }
}
