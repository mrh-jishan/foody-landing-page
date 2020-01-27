import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {
  goToTopShow = false;

  constructor() {
  }

  ngOnInit() {
  }

  onActivate(event) {
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
        window.clearInterval(scrollToTop);
      }
    }, 16);
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    this.goToTopShow = window.scrollY < window.innerHeight;
    // todo fix for the secure page using the directive
    // const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //
    // console.log('[scroll]', scrollPosition);
    //
    // this.goToTopShow = scrollPosition >= window.scrollY;
  }
}
