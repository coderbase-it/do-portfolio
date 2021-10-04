import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PortfolioRoutingModule } from './portfolio-routing.module';


@NgModule({
  declarations: [
    ProjectsComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    PortfolioRoutingModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class PortfolioModule { }
