import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentContextComponent } from './student-context.component';

describe('StudentContextComponent', () => {
  let component: StudentContextComponent;
  let fixture: ComponentFixture<StudentContextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentContextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
