import { Component, OnInit } from '@angular/core';
import { BioService } from 'src/app/data/services/bio.service';
import { SocialsService } from 'src/app/data/services/socials.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  footerItems$ = this.socialsService.getSocialAccounts();
  bio$ = this.bioService.getBio();
  dateOfToday = new Date()
  constructor(private socialsService: SocialsService, private bioService: BioService) { }
}
