import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsHomeSpaceComponent } from './ss-home-space.component';

describe('SsHomeSpaceComponent', () => {
  let component: SsHomeSpaceComponent;
  let fixture: ComponentFixture<SsHomeSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsHomeSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsHomeSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
