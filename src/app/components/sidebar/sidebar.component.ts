import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() isSidebarVisible: boolean = false;
  @Output() closeSidebarEvent = new EventEmitter<void>();
constructor(private router:Router){}

  images = [
    { src: 'assets/images/photo1.jpg', alt: 'Photo1' },
    { src: 'assets/images/photo2.jpg', alt: 'Photo2' },
    { src: 'assets/images/photo3.jpg', alt: 'Photo3' },
    { src: 'assets/images/photo5.jpg', alt: 'Photo4' },
    { src: 'assets/images/photo6.jpg', alt: 'Photo5' },
    { src: 'assets/images/photo7.jpg', alt: 'Photo6' },
    { src: 'assets/images/photo9.jpg', alt: 'Photo7' },
    { src: 'assets/images/photo10.jpg', alt: 'Photo8' },
    { src: 'assets/images/photo11.jpg', alt: 'Photo9' },
  ];
  closeSidebar() {
    this.closeSidebarEvent.emit();
  }
  isLightboxVisible = false;
  currentImage: string = '';

  // فتح نافذة العرض المكبّر
  openLightbox(imageSrc: string): void {
    this.currentImage = imageSrc;
    this.isLightboxVisible = true;
  }

  // إغلاق نافذة العرض المكبّر
  closeLightbox(): void {
    this.isLightboxVisible = false;
    this.currentImage = '';
  }
  routerHome(){
    this.router.navigateByUrl("/");
  }
  routerMenu(){
    this.router.navigateByUrl("/menu");
  }
  routerAbout(){
    this.router.navigateByUrl("/about");
  }
  routerContact(){
    this.router.navigateByUrl("/contact");
  }
  routerReservation(){
    this.router.navigateByUrl("/Reservation");
  }

}
