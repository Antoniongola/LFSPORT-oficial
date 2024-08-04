import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardJogadoresComponent } from './dashboard-jogadores.component';

describe('DashboardJogadoresComponent', () => {
  let component: DashboardJogadoresComponent;
  let fixture: ComponentFixture<DashboardJogadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardJogadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardJogadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
