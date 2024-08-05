import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTreinadoresComponent } from './dashboard-treinadores.component';

describe('DashboardTreinadoresComponent', () => {
  let component: DashboardTreinadoresComponent;
  let fixture: ComponentFixture<DashboardTreinadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTreinadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTreinadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
