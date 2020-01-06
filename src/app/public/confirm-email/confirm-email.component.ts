import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {noop, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  loginFrom: FormGroup;
  $user: Observable<any>;

  constructor(private router: Router,
              private fb: FormBuilder,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.loginFrom = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    });
  }

  login() {
    const value = this.loginFrom.value;
    const body = {
      auth: {
        password: value.password,
        email: value.email
      }
    };
    this.auth.login(body).pipe(
      tap(user => {
        console.log(user);
        this.router.navigateByUrl('/secure/dashboard');
      })).subscribe(
      noop, (err) => {
        console.log(err);
        alert(err.error.message);
      });
    // this.router.navigate(['/secure/dashboard']);
  }

}
