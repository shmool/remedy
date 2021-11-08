import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerPoseComponent } from './power-pose.component';

describe('PowerPoseComponent', () => {
  let component: PowerPoseComponent;
  let fixture: ComponentFixture<PowerPoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PowerPoseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerPoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
