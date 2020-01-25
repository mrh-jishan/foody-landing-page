import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Kitchen} from '../../service/model';

@Component({
  selector: 'app-kitchen-card',
  templateUrl: './kitchen-card.component.html',
  styleUrls: ['./kitchen-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class KitchenCardComponent implements OnInit {

  @Input() kitchen: Kitchen;

  constructor() {
  }

  ngOnInit() {
  }

}
