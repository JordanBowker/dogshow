import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { StallsComponent } from './stalls/stalls.component';
import { FindUsComponent } from './find-us/find-us.component';
import { WhatsOnComponent } from './whats-on/whats-on.component';
import { HeaderComponent } from './header/header.component';
import { LinksComponent } from './links/links.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { SpecialThanksComponent } from './special-thanks/special-thanks.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    NavigationComponent,
    ScheduleComponent,
    HomeComponent,
    StallsComponent,
    FindUsComponent,
    WhatsOnComponent,
    HeaderComponent,
    LinksComponent,
    GalleryComponent,
    UnderConstructionComponent,
    SpecialThanksComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
