import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LOGIN_PATH} from '../../service/constant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToLogin() {
    this.router.navigateByUrl(LOGIN_PATH);
  }
}
