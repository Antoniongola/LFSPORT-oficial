import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorDetalhadoComponent } from './jogador-detalhado.component';

describe('JogadorDetalhadoComponent', () => {
  let component: JogadorDetalhadoComponent;
  let fixture: ComponentFixture<JogadorDetalhadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JogadorDetalhadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogadorDetalhadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
