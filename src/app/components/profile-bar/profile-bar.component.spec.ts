import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBarComponent } from './profile-bar.component';

describe('ProfileBarComponent', () => {
  let component: ProfileBarComponent;
  let fixture: ComponentFixture<ProfileBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileBarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
