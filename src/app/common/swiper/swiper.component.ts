import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SwiperComponent implements OnInit {
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 4,
    spaceBetween: 4,
    freeMode: true
  };

  @Input() swiperItem: any[];

  constructor() {
    this.swiperItem = [
      {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      },
      {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      },
      {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      },
      {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      },
      {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      }, {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      }, {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      }, {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      }, {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      }, {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      }, {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      }, {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      }, {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      }, {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      }, {
        id: 1,
        url: '/secure/add-kitchen',
        img: '',
        price: '',
        type: ''
      }
    ];
  }

  ngOnInit() {
  }

}
