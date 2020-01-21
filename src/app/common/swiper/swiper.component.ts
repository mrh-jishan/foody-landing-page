import {Component, OnInit} from '@angular/core';
import {SwiperOptions} from 'swiper';

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent implements OnInit {
  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    slidesPerView: 6,
    spaceBetween: 1,
    freeMode: true
  };

  constructor() {
  }

  ngOnInit() {
  }

}
