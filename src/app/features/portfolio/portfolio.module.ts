import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    ProjectsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PortfolioModule { }
