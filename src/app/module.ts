import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SlideshowModule } from 'ng-simple-slideshow';

import { SharedModule } from './shared/module';

import { LandingComponent } from './landing/landing';
import { NavComponent } from './nav/nav';
import { HeaderComponent } from './header/header';
import { StoryComponent } from './story/story';
import { VenueComponent } from './venue/venue';
import { FooterComponent } from './footer/footer';
import { GalleryComponent } from './gallery/gallery';
import { AboutComponent } from './about/about';

@NgModule({
  declarations: [
    LandingComponent,
    NavComponent,
    HeaderComponent,
    StoryComponent,
    VenueComponent,
    FooterComponent,
    GalleryComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    ScrollToModule.forRoot(),
    SharedModule,
    SlideshowModule
  ],
  providers: [],
  bootstrap: [LandingComponent]
})
export class AppModule { }
