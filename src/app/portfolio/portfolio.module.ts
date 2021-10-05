import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    ProjectsComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
