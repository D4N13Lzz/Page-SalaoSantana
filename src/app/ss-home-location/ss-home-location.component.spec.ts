import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsHomeLocationComponent } from './ss-home-location.component';

describe('SsHomeLocationComponent', () => {
  let component: SsHomeLocationComponent;
  let fixture: ComponentFixture<SsHomeLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsHomeLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsHomeLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
