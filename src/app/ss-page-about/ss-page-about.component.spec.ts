import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsPageAboutComponent } from './ss-page-about.component';

describe('SsPageAboutComponent', () => {
  let component: SsPageAboutComponent;
  let fixture: ComponentFixture<SsPageAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsPageAboutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsPageAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
