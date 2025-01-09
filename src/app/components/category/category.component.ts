import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  menuItems = [
    { name: 'Lunch', image: 'assets/images/lunch.jpg' },
    { name: 'Dinner', image: 'assets/images/dinner.jpg' },
    { name: 'Dessert', image: 'assets/images/dessert.jpg' },
    { name: 'Starters', image: 'assets/images/breakfast.jpg' },
    { name: 'Drink', image: 'assets/images/drink.jpg' },
  ];
}
