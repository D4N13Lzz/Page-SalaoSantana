import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsHomeEventsComponent } from './ss-home-events.component';

describe('SsHomeEventsComponent', () => {
  let component: SsHomeEventsComponent;
  let fixture: ComponentFixture<SsHomeEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsHomeEventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsHomeEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
