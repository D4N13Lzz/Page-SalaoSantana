import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsHomeAboutComponent } from './ss-home-about.component';

describe('SsHomeAboutComponent', () => {
  let component: SsHomeAboutComponent;
  let fixture: ComponentFixture<SsHomeAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsHomeAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsHomeAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
