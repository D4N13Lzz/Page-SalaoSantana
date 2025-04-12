import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsNotFoundComponent } from './ss-not-found.component';

describe('SsNotFoundComponent', () => {
  let component: SsNotFoundComponent;
  let fixture: ComponentFixture<SsNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsNotFoundComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
