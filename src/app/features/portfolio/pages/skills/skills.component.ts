import { Component } from '@angular/core';
import { SkillsService } from 'src/app/data/services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills$ = this.skillsService.getSkills();

  tempOptions = [
    { viewClasses: 'd-none d-md-flex', displayInColumn: false, useSmallerHeadings: false, titleClasses: 'display-3' },
    { viewClasses: 'd-sm-flex d-md-none', displayInColumn: true, useSmallerHeadings: true, titleClasses: '' }
  ];

  constructor(private skillsService: SkillsService) { }
}
