import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {HOME_PATH} from '../service/constant';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit, AfterContentChecked {
  $user: Observable<any>;

  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.router.navigateByUrl(HOME_PATH).then(r => {
      localStorage.clear();
      this.auth.update_user(null);
    });
  }

  ngAfterContentChecked() {
    this.$user = this.auth.user;
  }

}
