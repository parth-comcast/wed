import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/module';

import { LandingComponent } from './landing/landing';
import { NavComponent } from './nav/nav';
import { HeaderComponent } from './header/header';
import { AboutComponent } from './about/about';

@NgModule({
  declarations: [
    LandingComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
