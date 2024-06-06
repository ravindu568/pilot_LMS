import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherContextComponent } from './teacher-context.component';

describe('TeacherContextComponent', () => {
  let component: TeacherContextComponent;
  let fixture: ComponentFixture<TeacherContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherContextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
