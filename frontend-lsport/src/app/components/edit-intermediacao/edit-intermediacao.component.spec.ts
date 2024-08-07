import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIntermediacaoComponent } from './edit-intermediacao.component';

describe('EditIntermediacaoComponent', () => {
  let component: EditIntermediacaoComponent;
  let fixture: ComponentFixture<EditIntermediacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditIntermediacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditIntermediacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
