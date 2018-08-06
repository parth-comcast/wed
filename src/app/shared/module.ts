import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TimerComponent } from './timer/timer';
import { MyStoryComponent } from './my-story/my-story';

@NgModule({
  declarations: [
    TimerComponent,
    MyStoryComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    TimerComponent,
    MyStoryComponent
  ]
})
export class SharedModule { }
