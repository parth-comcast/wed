import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SimpleSmoothScrollModule } from 'ng2-simple-smooth-scroll';

import { SharedModule } from './shared/module';

import { LandingComponent } from './landing/landing';
import { NavComponent } from './nav/nav';
import { HeaderComponent } from './header/header';
import { StoryComponent } from './story/story';
import { FooterComponent } from './footer/footer';
import { AboutComponent } from './about/about';

@NgModule({
  declarations: [
    LandingComponent,
    NavComponent,
    HeaderComponent,
    StoryComponent,
    FooterComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    SimpleSmoothScrollModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
