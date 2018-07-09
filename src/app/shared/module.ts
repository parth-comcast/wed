import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TimerComponent } from './timer/timer';

@NgModule({
  declarations: [
    TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    TimerComponent
  ]
})
export class SharedModule { }
