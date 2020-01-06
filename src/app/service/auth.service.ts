import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(body) {
    return this.http.post(`${environment.api.host}/api/v1/auth`, body);
  }

  join(body) {
    return this.http.post(`${environment.api.host}/api/v1/user`, body);
  }
}
