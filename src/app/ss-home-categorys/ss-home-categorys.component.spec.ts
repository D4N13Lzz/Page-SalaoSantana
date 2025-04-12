import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SSHomeCategorysComponent } from './ss-home-categorys.component';

describe('SSHomeCategorysComponent', () => {
  let component: SSHomeCategorysComponent;
  let fixture: ComponentFixture<SSHomeCategorysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SSHomeCategorysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SSHomeCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


