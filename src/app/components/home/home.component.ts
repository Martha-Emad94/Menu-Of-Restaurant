import { Component } from '@angular/core';
import { SliderComponent } from "../slider/slider.component";
import { CategoryComponent } from "../category/category.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    { src: 'assets/images/intro1.jpg', alt: 'Slide 1' ,title:'Romantic Restaurant'},
    { src: 'assets/images/intro2.jpg', alt: 'Slide 2' ,title:'Delicious Food' },
    { src: 'assets/images/intro3.jpg', alt: 'Slide 3' ,title:'Red Wines You Love' },
  ];
}
