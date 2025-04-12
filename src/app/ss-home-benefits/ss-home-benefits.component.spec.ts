import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsHomeBenefitsComponent } from './ss-home-benefits.component';

describe('SsHomeBenefitsComponent', () => {
  let component: SsHomeBenefitsComponent;
  let fixture: ComponentFixture<SsHomeBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsHomeBenefitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsHomeBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
