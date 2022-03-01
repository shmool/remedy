import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, RouterEvent, Event } from '@angular/router';
import { Observable, shareReplay, tap } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const STEPS = [
  'breathe',
  'express-gratitude/1',
  'express-gratitude/2',
  'express-gratitude/3',
  'focus-on-mission',
]
@Injectable({
  providedIn: 'root'
})
export class StepsService {
  nextStep$: Observable<string>;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // https://angular.io/api/router/RouterEvent#description
    this.nextStep$ = this.router.events.pipe(
      filter((e: Event): e is NavigationEnd => e instanceof NavigationEnd),
      map((event:NavigationEnd) => event.url.slice(1)),
      map(url => STEPS[STEPS.indexOf(url) + 1] || ''),
      shareReplay()
    )


  }
}
