import { ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BtnMenuComponent } from "../btn-menu/btn-menu.component";
@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [FormsModule, CommonModule, BtnMenuComponent],
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
    trigger('zoomAnimation', [
      state('hidden', style({ transform: 'scale(0)'})),
      state('visible', style({ transform: 'scale(1.2)' })),
      transition('hidden => visible', animate('0.9s ease-in')),
      transition('visible => hidden', animate('0.3s ease-out')),
    ]),
    trigger('fadeInFromBottom', [
      transition(':enter', [
        style({ transform: 'translateY(100px)', opacity: 0 }),
        animate('500ms 100ms', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms', style({ transform: 'translateY(100px)', opacity: 0 }))
      ])
    ])
  ]
})
 
export class SliderComponent implements OnChanges {
  @Input() id: string = 'carousel';
  @Input() slides: any[] = []; 
 @Input() showImage:boolean=true;
 @Input() show:boolean=false;
 @Input() enableAnimation = false;
 @Input() review:any[]=[];
 showButton:boolean=true;
 currentSlideIndex = 0;
 isVisible = true;
 currentIndex = 0;

 constructor(private cdr: ChangeDetectorRef) {}
 ngOnChanges(changes: SimpleChanges) {
  if (changes['slides']) {
    console.log('Slides updated:', this.slides);
  }
}
   navigate(direction: 'prev' | 'next') {
    this.isVisible = false; // Start hiding animation
    setTimeout(() => {
      if(direction==='next'){
  
        this.isVisible = true; 
      }
     // Trigger zoom-in animation
    }, 500); // Match animation duration
  }

}