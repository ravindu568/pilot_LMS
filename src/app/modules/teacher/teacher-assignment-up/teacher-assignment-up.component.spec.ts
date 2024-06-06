import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAssignmentUpComponent } from './teacher-assignment-up.component';

describe('TeacherAssignmentUpComponent', () => {
  let component: TeacherAssignmentUpComponent;
  let fixture: ComponentFixture<TeacherAssignmentUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherAssignmentUpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherAssignmentUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
