import { Component, OnInit } from '@angular/core';
import { share } from 'rxjs/operators';
import { BioService } from 'src/app/data/services/bio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  bio$ = this.bioService.getBio().pipe();

  bioOptions = [
    { viewClasses: 'd-none d-md-flex', headingClass: 'display-3', useH5: false },
    { viewClasses: 'd-sm-flex d-md-none', headingClass: '', useH5: true }
  ];

  constructor(private bioService: BioService) { }
}
