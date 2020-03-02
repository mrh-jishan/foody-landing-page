import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {FoodService} from './food.service';

@Injectable()
export class FoodResolverService implements Resolve<Observable<any>> {

  constructor(private foodService: FoodService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.foodService.my_kitchen_food(route.paramMap.get('id')).pipe(
      map(kitchen => kitchen.data.kitchen),
      catchError((err) => {
        return of(err.error);
      })
    );
  }
}
