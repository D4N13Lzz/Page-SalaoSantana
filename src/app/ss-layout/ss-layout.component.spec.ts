import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsLayoutComponent } from './ss-layout.component';

describe('SsLayoutComponent', () => {
  let component: SsLayoutComponent;
  let fixture: ComponentFixture<SsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
