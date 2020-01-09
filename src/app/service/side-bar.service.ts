import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  isOpen = false;
  isOpen$ = new BehaviorSubject<boolean>(false);

  constructor() {
    this.isOpen$.next(this.isOpen);
  }

  update_sidebar(isOpen: boolean) {
    this.isOpen = isOpen;
    this.isOpen$.next(isOpen);
  }
}
