import { Component, OnInit } from '@angular/core';
import { F1apiService } from 'src/app/services/f1api.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  raceCalendar: any = {};
  raceCalendarLoading: boolean = true;
  constructor(private f1service: F1apiService) { }

  ngOnInit(): void {
    this.f1service.getCalendar().subscribe((res) => {
      this.raceCalendar = res.MRData.RaceTable;
      // Set loading to false
      this.raceCalendarLoading = false;
    });
  }

}
