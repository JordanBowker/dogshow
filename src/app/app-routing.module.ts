import { PricingComponent } from './pricing/pricing.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { FindUsComponent } from './find-us/find-us.component';

const routes: Routes = [
  { path: '',   redirectTo: '/dogshow', pathMatch: 'full' },
  { path: 'dogshow', component: HomeComponent , data: {animation: 'Home'}},
  { path: 'schedule', component: ScheduleComponent , data: {animation: 'Schedule'}},
  { path: 'pricing', component: PricingComponent , data: {animation: 'Pricing'}},
  { path: 'findus', component: FindUsComponent , data: {animation: 'FindUs'}},
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
