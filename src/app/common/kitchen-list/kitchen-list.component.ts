import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kitchen-list',
  templateUrl: './kitchen-list.component.html',
  styleUrls: ['./kitchen-list.component.scss']
})
export class KitchenListComponent implements OnInit {

  foodList$ = Array(5);

  constructor() {
  }

  ngOnInit() {
  }

}
