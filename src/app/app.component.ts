
import { Component, HostListener, OnInit } from '@angular/core';
import { SsServiceLoadingService } from './ss-services/ss-service.loading.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Salão Santana | Salão de Festas SV';
  showScrollButton: boolean = false;
  isLoading: boolean = false;

  constructor(private SsServiceLoadingService: SsServiceLoadingService) {}


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkScroll();
  }
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  private checkScroll() {
    this.showScrollButton = window.scrollY > 300; // Ajuste a altura conforme necessário
  }

  ngOnInit() {
    this.SsServiceLoadingService.isLoading.subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
      if (isLoading) {
        this.disableScroll(); // Desativar o scroll
      } else {
        this.enableScroll(); // Reativar o scroll
      }
    });

    // Simulando um carregamento assíncrono
    this.SsServiceLoadingService.show();

    setTimeout(() => {
      this.SsServiceLoadingService.hide();
    }, 2000); // Oculta o loading após 2 segundos
  }

  private disableScroll() {
    document.body.style.overflow = 'hidden';
  }

  private enableScroll() {
    document.body.style.overflow = '';
  }
}