import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCourseContentComponent } from './student-course-content.component';

describe('StudentCourseContentComponent', () => {
  let component: StudentCourseContentComponent;
  let fixture: ComponentFixture<StudentCourseContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCourseContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentCourseContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
