import { ClassesComponent } from './classes/classes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { FindUsComponent } from './find-us/find-us.component';
import { DogShowComponent } from './dog-show/dog-show.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , data: {animation: 'Home'}},
  { path: 'dogshow', component: DogShowComponent , data: {animation: 'DogShow'}},
  { path: 'schedule', component: ScheduleComponent , data: {animation: 'Schedule'}},
  { path: 'classes', component: ClassesComponent , data: {animation: 'Classes'}},
  { path: 'findus', component: FindUsComponent , data: {animation: 'FindUs'}},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
