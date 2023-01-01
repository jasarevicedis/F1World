import { Component, OnInit } from '@angular/core';
import { F1apiService } from 'src/app/services/f1api.service';

@Component({
  selector: 'app-standings',
  templateUrl: './standings.component.html',
  styleUrls: ['./standings.component.scss']
})
export class StandingsComponent implements OnInit {
  driverStandings: any = {};
  driverStandingsLoading: boolean = true;

  constructor(private f1service: F1apiService) { }

  ngOnInit(): void {
    this.f1service.getDriverStandings().subscribe((res) => {
      this.driverStandings = res.MRData.StandingsTable.StandingsLists;
      this.driverStandingsLoading = false;
    });
  }

}
