import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
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
    { src: 'assets/images/photo15.jpg', alt: 'Photo10' },
    { src: 'assets/images/photo16.jpg', alt: 'Photo11' },
    { src: 'assets/images/photo17.jpg', alt: 'Photo12' },
  ];
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
}
