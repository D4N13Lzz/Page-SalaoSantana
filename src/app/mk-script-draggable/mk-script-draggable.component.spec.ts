import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MkScriptDraggableComponent } from './mk-script-draggable.component';

describe('MkScriptDraggableComponent', () => {
  let component: MkScriptDraggableComponent;
  let fixture: ComponentFixture<MkScriptDraggableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MkScriptDraggableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MkScriptDraggableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
