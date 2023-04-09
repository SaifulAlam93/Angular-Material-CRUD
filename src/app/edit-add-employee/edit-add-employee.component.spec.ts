import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddEmployeeComponent } from './edit-add-employee.component';

describe('EditAddEmployeeComponent', () => {
  let component: EditAddEmployeeComponent;
  let fixture: ComponentFixture<EditAddEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAddEmployeeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAddEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
