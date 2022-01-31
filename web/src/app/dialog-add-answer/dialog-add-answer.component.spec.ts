import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddAnswerComponent } from './dialog-add-answer.component';

describe('DialogAddAnswerComponent', () => {
  let component: DialogAddAnswerComponent;
  let fixture: ComponentFixture<DialogAddAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAddAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
