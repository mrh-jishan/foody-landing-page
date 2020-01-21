import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LOCAL_STORAGE_TOKEN_KEY} from './constant';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodListService {

  constructor(private http: HttpClient) {
  }

  kitchen_list(): Observable<any> {
    return this.http.get(`${environment.api.host}/api/v1/kitchen`,
      {headers: new HttpHeaders({Authorization: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)})});
  }

  kitchen_food_list(kitchenId) {
    return this.http.get(`${environment.api.host}/api/v1/kitchen/${kitchenId}/food`,
      {headers: new HttpHeaders({Authorization: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)})});
  }
}
