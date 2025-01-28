import { Component } from '@angular/core';
import { SliderComponent } from './../../shared component/slider/slider.component';
import { CategoryComponent } from "../category/category.component";
import { ReservationComponent } from "../reservation/reservation.component";
import { VideoComponent } from '../video/video.component';
import { BtnMenuComponent } from "../../shared component/btn-menu/btn-menu.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, CategoryComponent, ReservationComponent, VideoComponent,
    FormsModule, CommonModule, BtnMenuComponent],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  showButton:boolean=false
  images = [
    { src: 'assets/images/intro1.jpg', alt: 'Slide 1' ,title:'Romantic Restaurant'},
    { src: 'assets/images/intro2.jpg', alt: 'Slide 2' ,title:'Delicious Food' },
    { src: 'assets/images/intro3.jpg', alt: 'Slide 3' ,title:'Red Wines You Love' },
  ];
  slides = [
    { image:  'assets/images/slide1-01.jpg', title: 'welcome to', text: 'pato place' },
    { image: 'assets/images/slide2.jpg', title: 'welcome to', text: 'pato place' },
    { image:  'assets/images/slide3.jpg', title: 'welcome to', text: 'pato place' }
  ];
  slides2 = [
    { title: 'Customers Say', text: 'Review', image:'assets/images/person1.jpg',
     review: 'We are lorem ipsum dolor sit amet. consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ',
    author: 'Marie Simmons - New York'
    },
    { title: 'Customers Say', text: 'Review',image:'assets/images/person2.jpg',
      review: 'Another review text here. consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ',
      author: 'John Doe - California',
    },
    { title: 'Customers Say', text: 'Review',image:'assets/images/person3.jpg',
      review: 'Yet another review example. consectetur adipiscing elit. Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ',
      author: 'Jane Smith - London',
    },

  ];

}
