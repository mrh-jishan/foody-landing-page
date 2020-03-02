import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {FoodService} from './food.service';

@Injectable()
export class AddFoodResolverService implements Resolve<string> {

  constructor() {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
    return route.paramMap.get('id');
  }
}
