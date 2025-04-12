import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsPageSpaceComponent } from './ss-page-space.component';

describe('SsPageSpaceComponent', () => {
  let component: SsPageSpaceComponent;
  let fixture: ComponentFixture<SsPageSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsPageSpaceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsPageSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
