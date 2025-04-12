import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsNavbarComponent } from './ss-navbar.component';

describe('SsNavbarComponent', () => {
  let component: SsNavbarComponent;
  let fixture: ComponentFixture<SsNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsNavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
