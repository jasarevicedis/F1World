import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextRaceCardComponent } from './next-race-card.component';

describe('NextRaceCardComponent', () => {
  let component: NextRaceCardComponent;
  let fixture: ComponentFixture<NextRaceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NextRaceCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextRaceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
