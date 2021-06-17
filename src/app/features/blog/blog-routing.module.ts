import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogLandingComponent } from './pages/blog-landing/blog-landing.component';

import {BlogComponent} from './pages/blog/blog.component';

const routes: Routes = [
  {
    path: '',
    component: BlogLandingComponent,
  },
  {
    path: ':slug',
    component: BlogComponent,
  },
  {
    path: '**',
    component: BlogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogRoutingModule {}

