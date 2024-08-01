import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntermediacoesComponent } from './intermediacoes.component';

describe('IntermediacoesComponent', () => {
  let component: IntermediacoesComponent;
  let fixture: ComponentFixture<IntermediacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntermediacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntermediacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
