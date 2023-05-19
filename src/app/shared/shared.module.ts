import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    //Components
    CommentsComponent,

    //Pipes
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,

    //Directives
    HighlightDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    // Module
    MaterialModule,
    ReactiveFormsModule,

    //Component
    CommentsComponent,

    //Pipe
    ShortenPipe,
    UsernamePipe,
    TimeAgoPipe,

    //Directives
    HighlightDirective
  ]
})
export class SharedModule { }
