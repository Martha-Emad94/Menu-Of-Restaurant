import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


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
    { name: 'Starter', image: 'assets/images/breakfast.jpg' },
    { name: 'Breakfast', image: 'assets/images/menu3.jpg'},
    { name: 'Drinks', image: 'assets/images/drink.jpg' },
  ];
  constructor(private router:Router,private route:ActivatedRoute){}
  RouetCategory(category: string) {
      this.router.navigateByUrl(`Category/meals/${category}`);
  }
  RouetDrinks(drink: string) {
    this.router.navigateByUrl(`Category/drinks/${drink}`);
}
}
