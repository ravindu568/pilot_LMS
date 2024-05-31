import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProgrammeWidgetComponent } from './new-programme-widget.component';

describe('NewProgrammeWidgetComponent', () => {
  let component: NewProgrammeWidgetComponent;
  let fixture: ComponentFixture<NewProgrammeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewProgrammeWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewProgrammeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
