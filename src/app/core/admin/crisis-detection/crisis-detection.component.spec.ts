import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrisisDetectionComponent } from './crisis-detection.component';

describe('CrisisDetectionComponent', () => {
  let component: CrisisDetectionComponent;
  let fixture: ComponentFixture<CrisisDetectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrisisDetectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrisisDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
