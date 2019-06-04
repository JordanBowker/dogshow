import { StallsComponent } from './stalls/stalls.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { FindUsComponent } from './find-us/find-us.component';
import { WhatsOnComponent } from './whats-on/whats-on.component';
import { LinksComponent } from './links/links.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent , data: {animation: 'Home1'}},
  { path: 'whatson', component: WhatsOnComponent , data: {animation: 'WhatsOn1'}},
  { path: 'schedule', component: ScheduleComponent , data: {animation: 'Schedule1'}},
  { path: 'stalls', component: StallsComponent , data: {animation: 'Stalls'}},
  { path: 'findus', component: FindUsComponent , data: {animation: 'FindUs'}},
  { path: 'links', component: LinksComponent , data: {animation: 'Links'}},
  { path: 'underConstruction', component: UnderConstructionComponent},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
