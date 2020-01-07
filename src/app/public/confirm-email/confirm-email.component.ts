import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.scss']
})
export class ConfirmEmailComponent implements OnInit {

  data: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.data = this.route.snapshot.data;
    // {
    //   "user": {
    //   "data": {
    //     "user": {
    //       "email_confirmed": true,
    //         "id": 3,
    //         "email": "robinhassan.cs@gmail.com",
    //         "first_name": "robin",
    //         "last_name": "hassan",
    //         "gender": "male",
    //         "role": "customer",
    //         "created_at": "2020-01-06T16:26:52.507Z",
    //         "updated_at": "2020-01-07T15:12:40.866Z"
    //     }
    //   },
    //   "success": true,
    //     "message": "",
    //     "code": 200,
    //     "time": "2020-01-07T15:12:40.873Z"
    // }
    // }
  }

}
