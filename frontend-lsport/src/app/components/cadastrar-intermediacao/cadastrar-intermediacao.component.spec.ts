import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarIntermediacaoComponent } from './cadastrar-intermediacao.component';

describe('CadastrarIntermediacaoComponent', () => {
  let component: CadastrarIntermediacaoComponent;
  let fixture: ComponentFixture<CadastrarIntermediacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CadastrarIntermediacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarIntermediacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
