import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTreinadorComponent } from './edit-treinador.component';

describe('EditTreinadorComponent', () => {
  let component: EditTreinadorComponent;
  let fixture: ComponentFixture<EditTreinadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditTreinadorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditTreinadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
