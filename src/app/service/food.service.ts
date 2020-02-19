import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LOCAL_STORAGE_TOKEN_KEY} from './constant';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient) {
  }

  add_food(body, id): Observable<any> {
    return this.http.post(`${environment.api.host}/api/v1/user/kitchen/${id}/food`, body,
      {headers: new HttpHeaders({Authorization: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)})});
  }


  my_kitchen_food(id): Observable<any> {
    return this.http.get(`${environment.api.host}/api/v1/user/kitchen/${id}/food`,
      {headers: new HttpHeaders({Authorization: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)})});
  }
}
