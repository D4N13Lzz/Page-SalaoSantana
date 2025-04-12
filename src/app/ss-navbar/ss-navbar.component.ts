import { Component, HostListener } from '@angular/core';
import { SsServiceNavbuttonService } from '../ss-services/ss-service-navbutton.service';

@Component({
  selector: 'app-ss-navbar',
  templateUrl: './ss-navbar.component.html',
  standalone: false,
  styleUrls: ['./ss-navbar.component.css']
})
export class SsNavbarComponent {
  isSidebarOpen: boolean = false;

  constructor(private SsServiceNavbuttonService: SsServiceNavbuttonService) {}

  redirecionarParaSessao(sectionId: string) {
    this.SsServiceNavbuttonService.scrollToSection(sectionId);
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!event.target || !(event.target instanceof HTMLElement)) {
      return;
    }

    if (!this.isSidebarOpen || event.target.closest('.sidebar_header') || event.target.closest('.hamburger')) {
      return;
    }
    this.isSidebarOpen = false;
    this.enableScroll(); // Ao fechar o painel, reativar o scroll
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscPress(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.isSidebarOpen = false;
      this.enableScroll(); // Ao fechar o painel, reativar o scroll
    }
  }

  toggleSidebar() {
    if (window.innerWidth >= 960) {
      this.isSidebarOpen = false;
      this.enableScroll(); // Reativar o scroll
    } else {
      this.isSidebarOpen = !this.isSidebarOpen;
      if (this.isSidebarOpen) {
        this.disableScroll(); // Desativar o scroll
      } else {
        this.enableScroll(); // Reativar o scroll
      }
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth >= 960) {
      this.isSidebarOpen = false;
      this.enableScroll(); // Reativar o scroll
    }
  }

  onCloseClick() {
    this.isSidebarOpen = false;
    this.enableScroll(); // Ao fechar o painel, reativar o scroll
  }

  private disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  private enableScroll() {
    document.body.style.overflow = '';
  }

  redirecionarParaSessaoEFechar(sectionId: string) {
  this.onCloseClick();
  this.redirecionarParaSessao(sectionId);
}

}
