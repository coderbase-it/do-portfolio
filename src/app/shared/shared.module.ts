import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostListComponent } from './components/post-list/post-list.component';

@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    CommonModule,
    NgbModule, 
    PostListComponent
  ]
})
export class SharedModule { }
