import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MealsService } from '../services/meals.service';
import { Meals } from '../../interfaces/meals';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from "../../shared component/pagination/pagination.component";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, PaginationComponent],
  providers: [MealsService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  mealsByCategory: { category: string, meals: Meals[]}[] = [];
  menuItems = [
    { name: 'Breakfast', image: 'assets/images/starter.jpg' },
    { name: 'Starter', image: 'assets/images/menu3.jpg' },
    { name: 'Lunch', image: 'assets/images/menu1.jpg' },
    { name: 'Dinner', image: 'assets/images/dinner.jpg' },
    { name: 'Dessert', image: 'assets/images/menu2.jpg' }
  ];
category: any;
drinks: any[] = [];
currentPage: number = 0;
pageSize: number = 6; // عدد العناصر لكل صفحة
paginatedMeals: any[] = [];
paginatedDrinks: any[] = [];
totalItems: number = 0;
  constructor(private mealsService: MealsService) {}

  ngOnInit(): void {
    this.fetchMealsByCategory();
    this.fetchDrinks()
  }

  fetchMealsByCategory(): void {
    this.mealsService.getMeals().subscribe(data => {
      this.mealsByCategory = data;
    });
  }
  fetchDrinks(): void {
    this.mealsService.getDrinks().subscribe(data => {
      this.drinks = data;
    });
  }
}
