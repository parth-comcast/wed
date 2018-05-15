import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { LandingComponent } from './landing/landing';
import { SliderComponent } from './slider/slider';

@NgModule({
  declarations: [
    LandingComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
