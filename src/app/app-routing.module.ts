import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { HomeComponent } from './pages/home/home.component';
import { StandingsComponent } from './pages/standings/standings.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'standings', component: StandingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
