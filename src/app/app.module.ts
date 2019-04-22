import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogComponent } from './dog/dog.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { FindUsComponent } from './find-us/find-us.component';

@NgModule({
  declarations: [
    AppComponent,
    DogComponent,
    NavigationComponent,
    ScheduleComponent,
    HomeComponent,
    ClassesComponent,
    FindUsComponent
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
