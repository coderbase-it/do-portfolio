import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/data/services/bio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bio$ = this.bioService.getBio().pipe();

  aboutOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-3', useH5: false },
    { viewClasses: 'd-sm-flex d-md-none', headingClass: '', useH5: true }
  ];

  constructor(private bioService: BioService) { }
}
