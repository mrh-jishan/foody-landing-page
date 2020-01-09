import {AfterContentChecked, Component, OnInit} from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';
import {HOME_PATH} from '../service/constant';
import {User} from '../service/model';

@Component({
  selector: 'app-secure',
  templateUrl: './secure.component.html',
  styleUrls: ['./secure.component.scss']
})
export class SecureComponent implements OnInit, AfterContentChecked {
  user: User;

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
    this.user = this.auth.user;
  }

}
