import { NgModule } from '@angular/core';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { AboutComponent } from './about/about.component';
import { CoreModule } from '../core/core.module';


@NgModule({
  declarations: [
    ProjectsComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    CoreModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
