import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentAssingnmentComponent } from './student-assingnment.component';

describe('StudentAssingnmentComponent', () => {
  let component: StudentAssingnmentComponent;
  let fixture: ComponentFixture<StudentAssingnmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentAssingnmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentAssingnmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
