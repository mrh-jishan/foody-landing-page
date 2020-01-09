import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {tap} from 'rxjs/operators';
import {noop} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  joinForm: FormGroup;
  public gender = 'male';

  constructor(private router: Router,
              private fb: FormBuilder,
              private auth: AuthService) {
  }

  ngOnInit() {
    this.joinForm = this.fb.group({
      fName: ['', Validators.compose([Validators.required, Validators.min(6)])],
      lName: ['', Validators.compose([Validators.required, Validators.min(6)])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.min(6)])],
      gender: [this.gender, Validators.compose([Validators.required])],
      role: ['customer', Validators.compose([Validators.required])],
      terms: [false, Validators.compose([Validators.requiredTrue])]
    });
  }

  onGenderChange(value) {
    this.gender = value;
    this.joinForm.patchValue({gender: value});
  }

  joinUs() {
    const value = this.joinForm.value;
    const body = {
      user: {
        first_name: value.fName,
        last_name: value.lName,
        password: value.password,
        gender: value.gender,
        email: value.email.toLowerCase(),
        role: value.role
      }
    };

    this.auth.join(body).pipe(tap(user => {
      this.router.navigateByUrl('/public/login');
    })).subscribe(noop, (err: any) => {
      console.log(err);
      alert('Sorry! ' + err.error.data[0]);
      // this.openModal('join-error-message');
    });
  }
}
