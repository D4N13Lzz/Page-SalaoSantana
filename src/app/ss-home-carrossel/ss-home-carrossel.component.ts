import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-ss-home-carrossel',
  templateUrl: './ss-home-carrossel.component.html',
  styleUrls: ['./ss-home-carrossel.component.css']
})
export class SsHomeCarrosselComponent implements OnInit {
  images: any[] = [];
  smallScreenImages: any[] = [
    { path: '../../assets/Empresa-Inicio/Empresa-Carrossel/mobile-carrossel-01.png', title: 'Imagem 1', link: 'instagram.com' },
    { path: '../../assets/Empresa-Inicio/Empresa-Carrossel/mobile-carrossel-02.png', title: 'Imagem 2', link: 'facebook.com' },
    { path: '../../assets/Empresa-Inicio/Empresa-Carrossel/mobile-carrossel-01.png', title: 'Imagem 3', link: 'link_para_imagem_1' },
    { path: '../../assets/Empresa-Inicio/Empresa-Carrossel/mobile-carrossel-02.png', title: 'Imagem 4', link: 'link_para_imagem_1' },
  ];

  largeScreenImages: any[] = [
    { path: '../../assets/Empresa-Inicio/Empresa-Carrossel/desktop-carrossel-01.png', title: 'Image 1', link: 'instagram.com' },
    { path: '../../assets/Empresa-Inicio/Empresa-Carrossel/desktop-carrossel-01.png', title: 'Image 2', link: 'facebook.com' },
    { path: '../../assets/Empresa-Inicio/Empresa-Carrossel/desktop-carrossel-01.png', title: 'Image 3', link: 'link_para_imagem_1' },
    { path: '../../assets/Empresa-Inicio/Empresa-Carrossel/desktop-carrossel-01.png', title: 'Image 4', link: 'link_para_imagem_1' },
  ];

  currentIndex = 0;
  interval: any;
  isMouseOverCarousel = false;
  isDragging = false;
  isDraggingOverItem = false;
  draggingIndex = -1;
  startX = 0;
  currentX = 0;
  touchStartX = 0;
  touchCurrentX = 0;

  constructor() { }

  ngOnInit() {
    this.checkScreenWidth();
    this.startSlideShow();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1025) {
      this.images = this.smallScreenImages;
    } else {
      this.images = this.largeScreenImages;
    }
  }

  startSlideShow() {
    this.interval = setInterval(() => {
      if (!this.isMouseOverCarousel) {
        this.nextSlide();
      }
    }, 5000);
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  onMouseEnter() {
    this.isMouseOverCarousel = true;
  }

  onMouseLeave() {
    this.isMouseOverCarousel = false;
  }

  onMouseDown(event: MouseEvent, index: number) {
    this.isDragging = true;
    this.startX = event.clientX;
    this.currentX = this.startX;
    this.draggingIndex = index;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      this.currentX = event.clientX;
      this.isDraggingOverItem = true;
    }
  }

  onMouseUp() {
    if (this.isDragging) {
      const deltaX = this.currentX - this.startX;
      if (deltaX > 50) {
        this.prevSlide();
      } else if (deltaX < -50) {
        this.nextSlide();
      }
      this.isDragging = false;
      this.isDraggingOverItem = false;
      this.draggingIndex = -1;
    }
  }

  onTouchStart(event: TouchEvent) {
    this.isDragging = true;
    this.touchStartX = event.touches[0].clientX;
    this.touchCurrentX = this.touchStartX;
  }

  onTouchMove(event: TouchEvent) {
    if (this.isDragging) {
      this.touchCurrentX = event.touches[0].clientX;
    }
  }

  onTouchEnd() {
    if (this.isDragging) {
      const deltaX = this.touchCurrentX - this.touchStartX;
      if (deltaX > 50) {
        this.prevSlide();
      } else if (deltaX < -50) {
        this.nextSlide();
      }
      this.isDragging = false;
    }
  }

  onMouseLeaveItem(index: number) {
    if (this.isDragging && this.draggingIndex === index) {
      this.isDraggingOverItem = false;
    }
  }
}
