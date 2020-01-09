import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {noop, Observable} from 'rxjs';
import {ModalDialogService} from 'ngx-modal-dialog';
import {MessageModalComponent} from '../../common/message-modal/message-modal.component';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom: FormGroup;
  $user: Observable<any>;

  constructor(private router: Router,
              private fb: FormBuilder,
              private auth: AuthService,
              private modalService: ModalDialogService,
              private viewRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.loginFrom = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login() {
    const value = this.loginFrom.value;
    const body = {
      auth: {
        password: value.password,
        email: value.email.toLowerCase()
      }
    };
    this.auth.login(body).pipe(tap(user => {
      console.log(user);
      this.router.navigateByUrl('/secure/dashboard');
    })).subscribe(noop, (err) => {
      this.openNewDialog(err.error.message);
    });
  }


  openNewDialog(message) {
    this.modalService.openDialog(this.viewRef, {
      data: message,
      title: 'Message',
      childComponent: MessageModalComponent,
      actionButtons: [{text: 'Close'}],
      settings: {contentClass: 'modal-content w-350'}
    });
  }
}
