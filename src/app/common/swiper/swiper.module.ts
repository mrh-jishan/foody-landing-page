import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwiperComponent} from './swiper.component';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [SwiperComponent],
  imports: [
    CommonModule,
    RouterModule,
    NgxUsefulSwiperModule
  ],
  exports: [SwiperComponent]
})
export class SwiperModule {
}
