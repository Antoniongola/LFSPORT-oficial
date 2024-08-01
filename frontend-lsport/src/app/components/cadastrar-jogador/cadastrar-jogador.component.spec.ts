import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarJogadorComponent } from './cadastrar-jogador.component';

describe('CadastrarJogadorComponent', () => {
  let component: CadastrarJogadorComponent;
  let fixture: ComponentFixture<CadastrarJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarJogadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
