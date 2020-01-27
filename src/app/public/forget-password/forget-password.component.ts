import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {noop, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {AuthService} from '../../service/auth.service';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordFrom: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.forgetPasswordFrom = this.fb.group({
      email: ['', Validators.compose([Validators.required])]
    });
  }

  submit() {
    this.auth.login({
      auth: {
        email: this.forgetPasswordFrom.value.email
      }
    }).pipe(
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
