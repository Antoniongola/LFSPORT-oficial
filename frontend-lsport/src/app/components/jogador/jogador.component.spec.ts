import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JogadorComponent } from './jogador.component';

describe('JogadorComponent', () => {
  let component: JogadorComponent;
  let fixture: ComponentFixture<JogadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JogadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JogadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
