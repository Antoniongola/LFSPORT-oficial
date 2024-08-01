import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarTreinadorComponent } from './cadastrar-treinador.component';

describe('CadastrarTreinadorComponent', () => {
  let component: CadastrarTreinadorComponent;
  let fixture: ComponentFixture<CadastrarTreinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarTreinadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarTreinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
