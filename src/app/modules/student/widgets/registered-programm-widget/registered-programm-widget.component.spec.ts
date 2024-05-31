import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredProgrammWidgetComponent } from './registered-programm-widget.component';

describe('RegisteredProgrammWidgetComponent', () => {
  let component: RegisteredProgrammWidgetComponent;
  let fixture: ComponentFixture<RegisteredProgrammWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredProgrammWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisteredProgrammWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
