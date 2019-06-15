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
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'whatson', component: WhatsOnComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'stalls', component: StallsComponent },
  { path: 'findus', component: FindUsComponent },
  { path: 'links', component: LinksComponent },
  { path: 'underConstruction', component: UnderConstructionComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
