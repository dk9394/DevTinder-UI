import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDetailsContainerComponent } from './form-details-container.component';

describe('FormDetailsContainerComponent', () => {
  let component: FormDetailsContainerComponent;
  let fixture: ComponentFixture<FormDetailsContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormDetailsContainerComponent]
    });
    fixture = TestBed.createComponent(FormDetailsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
