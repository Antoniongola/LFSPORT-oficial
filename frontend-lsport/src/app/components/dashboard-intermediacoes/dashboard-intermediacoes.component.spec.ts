import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardIntermediacoesComponent } from './dashboard-intermediacoes.component';

describe('DashboardIntermediacoesComponent', () => {
  let component: DashboardIntermediacoesComponent;
  let fixture: ComponentFixture<DashboardIntermediacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardIntermediacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardIntermediacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
