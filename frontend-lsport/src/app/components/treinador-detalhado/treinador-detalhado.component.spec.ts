import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinadorDetalhadoComponent } from './treinador-detalhado.component';

describe('TreinadorDetalhadoComponent', () => {
  let component: TreinadorDetalhadoComponent;
  let fixture: ComponentFixture<TreinadorDetalhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TreinadorDetalhadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinadorDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
