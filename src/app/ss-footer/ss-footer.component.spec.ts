import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsFooterComponent } from './ss-footer.component';

describe('SsFooterComponent', () => {
  let component: SsFooterComponent;
  let fixture: ComponentFixture<SsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsFooterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
