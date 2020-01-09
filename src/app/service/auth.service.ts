import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject} from 'rxjs';
import {User} from './model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User = {};
  user$ = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
    this.user$.next(this.user);
  }

  login(body) {
    return this.http.post(`${environment.api.host}/api/v1/auth`, body);
  }

  update_user(user: any) {
    this.user = user;
    this.user$.next(user);
  }

  join(body) {
    return this.http.post(`${environment.api.host}/api/v1/user`, body);
  }

  email_confirmation(token) {
    return this.http.put(`${environment.api.host}/api/v1/auth/${token}`, {});
  }
}
