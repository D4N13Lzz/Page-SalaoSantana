import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-mk-script-draggable',
  templateUrl: './mk-script-draggable.component.html',
  styleUrl: './mk-script-draggable.component.css'
})
export class MkScriptDraggableComponent {
  @ViewChild('draggable', { static: true }) draggable!: ElementRef;

  isDragging = false;
  dragStartX = 0;
  scrollLeftStart = 0;

  @HostListener('document:mouseup', ['$event'])
  @HostListener('document:touchend', ['$event'])
  onDragEnd() {
    this.isDragging = false;
  }

  onDragStart(event: MouseEvent | TouchEvent) {
    this.isDragging = true;
    this.dragStartX = this.getClientX(event);
    this.scrollLeftStart = this.draggable.nativeElement.scrollLeft;
  }

  onDragMove(event: MouseEvent | TouchEvent) {
    if (this.isDragging) {
      const dragCurrentX = this.getClientX(event);
      const dragDelta = this.dragStartX - dragCurrentX;
      this.draggable.nativeElement.scrollLeft = this.scrollLeftStart + dragDelta;
    }
  }

  private getClientX(event: MouseEvent | TouchEvent): number {
    return event instanceof MouseEvent ? event.clientX : event.touches[0].clientX;
  }
}
