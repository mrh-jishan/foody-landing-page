import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {

  joinForm: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.joinForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      type: ['', Validators.compose([Validators.required])],
      about: ['', Validators.compose([Validators.required])],
      terms: [false, Validators.compose([Validators.requiredTrue])]
    });
  }

}
