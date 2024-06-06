import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCoursesComponent } from './new-courses.component';

describe('NewCoursesComponent', () => {
  let component: NewCoursesComponent;
  let fixture: ComponentFixture<NewCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCoursesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
