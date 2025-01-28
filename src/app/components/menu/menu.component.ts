import { Component, OnInit } from '@angular/core';
import { MealsService } from '../services/meals.service';
import { Meals } from '../../interfaces/meals';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from '../../shared component/pagination/pagination.component';
import { Category } from './../../interfaces/category';
import { TitlePageComponent } from "../../shared component/title-page/title-page.component";
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [NgxPaginationModule, CommonModule, HttpClientModule, PaginationComponent, TitlePageComponent],
providers: [MealsService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuItems = [
    { name: 'Starter', image: 'assets/images/starter.jpg' },
    { name: 'Breakfast', image: 'assets/images/menu3.jpg'},
    { name: 'Lunch', image: 'assets/images/menu1.jpg'},
    { name: 'Dinner', image: 'assets/images/dinner.jpg'},
    { name: 'Dessert', image: 'assets/images/menu2.jpg'},
    { name: 'Drinks', image: 'assets/images/drink.jpg'}
  ];
  mealsByCategory:Category[] = [];
  paginatedItems: { type:string ; data: any }[] = [];
  currentPage: number = 1; // Unified pagination current page
  itemsPerPage: number = 20; // Items per page
  currentPageDrinks: number=1;


  constructor(private mealsService: MealsService,private router:Router,private rout:ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchMealsByCategory();

  }

  fetchMealsByCategory(): void {
    this.mealsService.getMeals().subscribe({
      next: (res) => {
        this.mealsByCategory = res;
        this.calculateMealPrices();
      },
      error: (error) => {
        console.log('Error fetching meals:', error);
      }
    });
  }
 
  onPageChange(event: number): void {
    this.currentPage = event;
    console.log('Current page:', this.currentPage);
  }
  onPageChangeDrinks(event: number): void {
    this.currentPageDrinks = event;
    console.log('Current page:', this.currentPage);
  }
  calculateMealPrices(): void {
    // تخصيص سعر عشوائي لكل وجبة داخل كل فئة
    this.mealsByCategory.forEach(category => {
      category.meals.forEach(meal => {
        meal.price = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // تخصيص سعر عشوائي بين 50 و 200
      });

      category.drinks.forEach(drink => {
        drink.price = Math.floor(Math.random() * (100 - 30 + 1)) + 30; // تخصيص سعر عشوائي للمشروبات
      });
    });
  }
  routerDetailsMeals(id:string){
    this.router.navigateByUrl(`Meal/${id}`)
  }
  routerDetailsDrinks(id:string){
    this.router.navigateByUrl(`Drink/${id}`)
  }
}
