import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, share } from 'rxjs/operators';
import { Bio } from 'src/app/data/models/bio';
import { BioService } from 'src/app/data/services/bio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  bio$: Observable<Bio> = this.bioService.getBio();
  isHome$: Observable<boolean> = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map(event => {
      if (event instanceof NavigationEnd) {
        if (event.url.startsWith('/#') || event.url == '/') {
          return true;
        }
      }

      return false;
    }),
    share()
  );

  menuItems = [
    { title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about' },
    { title: 'My Skills', homePath: '/', fragment: 'skills', pagePath: '/skills' },
    { title: 'My Projects', homePath: '/', fragment: 'projects', pagePath: '/projects' },
    { title: 'My Blog', homePath: '/blog', fragment: '', pagePath: '/blog' }
  ];
  smMenuItems = this.menuItems.concat([
    { title: 'Contact Me', homePath: '/', fragment: 'contact', pagePath: '/contact' },
  ]);


  constructor(private bioService: BioService, private router: Router) { }

  ngOnInit(): void { }
}