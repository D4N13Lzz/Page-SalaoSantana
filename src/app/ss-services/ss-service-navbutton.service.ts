// scroll.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SsServiceNavbuttonService {
  private scrollSubject = new Subject<string>();

  scroll$ = this.scrollSubject.asObservable();

  scrollToSection(sectionId: string) {
    this.scrollSubject.next(sectionId);
  }
}
