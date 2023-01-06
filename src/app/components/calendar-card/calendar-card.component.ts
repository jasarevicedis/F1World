import { Component, OnInit, Input } from '@angular/core';
import { F1apiService } from 'src/app/services/f1api.service';


@Component({
  selector: 'app-calendar-card',
  templateUrl: './calendar-card.component.html',
  styleUrls: ['./calendar-card.component.scss']
})
export class CalendarCardComponent implements OnInit {
  @Input() race: any = {};
  constructor() { }

  ngOnInit(): void {
  }

}
