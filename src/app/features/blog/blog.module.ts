import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {BlogRoutingModule} from './blog-routing.module';
import {BlogComponent} from './pages/blog/blog.component';
import { BlogLandingComponent } from './pages/blog-landing/blog-landing.component';

@NgModule({
  declarations: [BlogComponent, BlogLandingComponent],
  imports: [CommonModule, BlogRoutingModule, ScullyLibModule],
})
export class BlogModule {}
