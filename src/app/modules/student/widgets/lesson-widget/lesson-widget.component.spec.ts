import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonWidgetComponent } from './lesson-widget.component';

describe('LessonWidgetComponent', () => {
  let component: LessonWidgetComponent;
  let fixture: ComponentFixture<LessonWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LessonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
