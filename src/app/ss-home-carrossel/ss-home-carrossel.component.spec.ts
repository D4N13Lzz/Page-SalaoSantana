import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsHomeCarrosselComponent } from './ss-home-carrossel.component';

describe('SsHomeCarrosselComponent', () => {
  let component: SsHomeCarrosselComponent;
  let fixture: ComponentFixture<SsHomeCarrosselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SsHomeCarrosselComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SsHomeCarrosselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
