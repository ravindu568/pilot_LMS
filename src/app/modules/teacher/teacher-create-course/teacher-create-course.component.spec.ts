import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherCreateCourseComponent } from './teacher-create-course.component';

describe('TeacherCreateCourseComponent', () => {
  let component: TeacherCreateCourseComponent;
  let fixture: ComponentFixture<TeacherCreateCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherCreateCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherCreateCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
