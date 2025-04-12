import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SsServiceNavbuttonService } from '../ss-services/ss-service-navbutton.service';

@Component({
  selector: 'app-ss-home',
  standalone: false,
  templateUrl: './ss-home.component.html',
  styleUrl: './ss-home.component.css'
})
export class SsHomeComponent implements OnInit, OnDestroy {
  private scrollSubscription: Subscription = new Subscription();

  constructor(
    private elementRef: ElementRef,
    private SsServiceNavbuttonService: SsServiceNavbuttonService
  ) {}

  ngOnInit() {
    this.scrollSubscription = this.SsServiceNavbuttonService.scroll$.subscribe((sectionId) => {
      const section = this.elementRef.nativeElement.querySelector(`#${sectionId}`);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  ngOnDestroy() {
    this.scrollSubscription.unsubscribe();
  }
}
