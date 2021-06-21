import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerItems = [
    { tooltip: 'Dev.to', iconClasses: ' fab fa-dev', url: 'https://dev.to' },
    { tooltip: 'Dribbble', iconClasses: ' fab fa-dribbble', url: 'https://dribbble.com' },
    { tooltip: 'Github', iconClasses: ' fab fa-github-alt', url: 'https://github.com' },
    { tooltip: 'LinkedIn', iconClasses: ' fab fa-linkedin-in', url: 'https://linkedin.com' },
    { tooltip: 'Twitter', iconClasses: ' fab fa-twitter', url: 'https://twitter.com' },
  ];

  constructor() { }
}
