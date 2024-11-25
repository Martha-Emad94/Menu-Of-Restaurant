import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  animations: [
    trigger('rotateInDownLeft', [
      transition('hidden => visible', [
        animate('1s', keyframes([
          style({ transform: 'rotate(-90deg)', opacity: 0, offset: 0 }),
          style({ transform: 'rotate(15deg)', opacity: 0.5, offset: 0.7 }),
          style({ transform: 'rotate(0deg)', opacity: 1, offset: 1.0 }),
        ])),
      ]),
    ]),
    trigger('rotateInUpRight', [
      transition('hidden => visible', [
        animate('1s', keyframes([
          style({ transform: 'rotate(90deg)', opacity: 0, offset: 0 }),
          style({ transform: 'rotate(-15deg)', opacity: 0.5, offset: 0.7 }),
          style({ transform: 'rotate(0deg)', opacity: 1, offset: 1.0 }),
        ])),
      ]),
      
    ]),
  ],
})
 
export class SliderComponent {
  images = [
    { src: 'assets/images/slide1-01.jpg', alt: 'Slide 1' },
    { src: 'assets/images/slide2.jpg', alt: 'Slide 2' },
    { src: 'assets/images/slide3.jpg', alt: 'Slide 3' },
  ];
}
