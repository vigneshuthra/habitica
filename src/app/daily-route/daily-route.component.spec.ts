import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRouteComponent } from './daily-route.component';

describe('DailyRouteComponent', () => {
  let component: DailyRouteComponent;
  let fixture: ComponentFixture<DailyRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRouteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailyRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
