import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, share, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private router: Router) { }

  isHome() {
    return this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(event => {
        if (event instanceof NavigationEnd) {
          if (event.url.startsWith('/#') || event.url == '/') {
            return true;
          }
        }

        return false;
      }),
      startWith(this.router.url.startsWith('/#') || this.router.url == '/')
    );
  }
}
