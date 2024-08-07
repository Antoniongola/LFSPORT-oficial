import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJogadorComponent } from './edit-jogador.component';

describe('EditJogadorComponent', () => {
  let component: EditJogadorComponent;
  let fixture: ComponentFixture<EditJogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditJogadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditJogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
