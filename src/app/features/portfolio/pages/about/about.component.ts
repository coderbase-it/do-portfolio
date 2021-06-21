import { Component } from '@angular/core';
import { BioService } from 'src/app/data/services/bio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  bio$ = this.bioService.getBio().pipe();

  tempOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-3', useSmallerHeadings: false },
    { viewClasses: 'd-sm-flex d-md-none', headingClass: '', useSmallerHeadings: true }
  ];

  constructor(private bioService: BioService) { }
}
