import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { HomeComponent } from './pages/home/home.component';
import { StatsComponent } from './pages/stats/stats.component';
import { TeamsComponent } from './pages/teams/teams.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'stats', component: StatsComponent},
  {path: 'teams', component: TeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
