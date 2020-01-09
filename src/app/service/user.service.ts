import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LOCAL_STORAGE_TOKEN_KEY} from './constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  get_user() {
    return this.http.get(`${environment.api.host}/api/v1/user`,
      {headers: new HttpHeaders({Authorization: localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)})});
  }
}
