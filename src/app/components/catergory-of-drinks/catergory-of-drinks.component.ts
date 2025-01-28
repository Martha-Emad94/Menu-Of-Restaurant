import { Component, OnInit } from '@angular/core';
import { Category } from '../../interfaces/category';
import { MealsService } from '../services/meals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from '../../shared component/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TitlePageComponent } from "../../shared component/title-page/title-page.component";

@Component({
  selector: 'app-catergory-of-drinks',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, PaginationComponent, NgxPaginationModule, TitlePageComponent],
  providers:[MealsService],
  templateUrl: './catergory-of-drinks.component.html',
  styleUrl: './catergory-of-drinks.component.css'
})
export class CatergoryOfDrinksComponent implements OnInit{
  Drinks:Category[] = [];
  selectCategory:string| null = null;
  currentPage:number=1;
  itemsPerPage:number=20;
  categoryDrinks: any[] = [];
  menuItems = [
    { name: 'Starter', image: 'assets/images/starter.jpg' },
    { name: 'Breakfast', image: 'assets/images/menu3.jpg'},
    { name: 'Lunch', image: 'assets/images/menu1.jpg'},
    { name: 'Dinner', image: 'assets/images/dinner.jpg'},
    { name: 'Dessert', image: 'assets/images/menu2.jpg'},
    { name: 'Drinks', image: 'assets/images/drink.jpg' },
  ];
  constructor(private mealsService:MealsService ,private route: ActivatedRoute ,private router:Router){}

  ngOnInit(): void {
    this.selectedCategory();
  }

  selectedCategory(){
    this.route.paramMap.subscribe((param=>{
      this.selectCategory=param.get('category');
      this.fetchMealsByCategory();
    }))
  }

  fetchMealsByCategory(): void {
    this.mealsService.getMeals().subscribe({
      next: (res) => {
        this.Drinks = res;
        console.log('res', res)
        this.calculateMealPrices();
        this.filterMealsByCategory();
      },
      error: (error) => {
        console.log('Error fetching meals:', error);
      }
    });
  }
  filterMealsByCategory():void{
    if (this.selectCategory) {
      const categoryData = this.Drinks.find(
        (category) => category.category.toLowerCase() === this.selectCategory?.toLowerCase()
      );
      if (categoryData) {
        this.categoryDrinks = categoryData.drinks || [];
      } else {
        console.warn(`Category ${this.selectCategory} not found in mealsByCategory.`);
        this.categoryDrinks = [];
      }
    }
  }
  
  calculateMealPrices(): void {
    // تخصيص سعر عشوائي لكل وجبة داخل كل فئة
    this.Drinks.forEach(category => {
      category.drinks.forEach(drink => {
        drink.price = Math.floor(Math.random() *  (100 - 30 + 1)) + 30; // تخصيص سعر عشوائي بين 50 و 200
      });
    })
  }
  onPageChange(event:number){
    this.currentPage=event
  }
  routerDetailsDrinks(id:string){
    this.router.navigateByUrl(`Drink/${id}`)
  }
}