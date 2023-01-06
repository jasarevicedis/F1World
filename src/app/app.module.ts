import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StandingsComponent } from './pages/standings/standings.component';
import { HeaderComponent } from './components/header/header.component';

import { F1apiService } from './services/f1api.service';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { StatsComponent } from './pages/stats/stats.component';
import { CalendarCardComponent } from './components/calendar-card/calendar-card.component';
import { NextRaceCardComponent } from './components/next-race-card/next-race-card.component';
import { TeamsComponent } from './pages/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CalendarComponent,
    StatsComponent,
    CalendarCardComponent,
    NextRaceCardComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [F1apiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
