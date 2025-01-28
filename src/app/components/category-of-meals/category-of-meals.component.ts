import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Category } from '../../interfaces/category';
import { MealsService } from '../services/meals.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from "../../shared component/pagination/pagination.component";
import { NgxPaginationModule } from 'ngx-pagination';
import { TitlePageComponent } from "../../shared component/title-page/title-page.component";
@Component({
  selector: 'app-category-of-meals',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, PaginationComponent, NgxPaginationModule, TitlePageComponent],
 providers:[MealsService],
templateUrl:'./category-of-meals.component.html',
  styleUrl: './category-of-meals.component.css'
})
export class CategoryOfMealsComponent implements OnInit{
  mealsByCategory:Category[] = [];
  selectCategory:string| null = null;
  currentPage:number=1;
  itemsPerPage:number=14;
  categoryMeals: any[] = [];
  menuItems = [
    { name: 'Starter', image: 'assets/images/starter.jpg' },
    { name: 'Breakfast', image: 'assets/images/menu3.jpg'},
    { name: 'Lunch', image: 'assets/images/menu1.jpg'},
    { name: 'Dinner', image: 'assets/images/dinner.jpg'},
    { name: 'Dessert', image: 'assets/images/menu2.jpg'},
    
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
        this.mealsByCategory = res;
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
      const categoryData = this.mealsByCategory.find(
        (category) => category.category === this.selectCategory
      );
      this.categoryMeals = categoryData ? categoryData.meals : [];
    }
  }
  
  calculateMealPrices(): void {
    // تخصيص سعر عشوائي لكل وجبة داخل كل فئة
    this.mealsByCategory.forEach(category => {
      category.meals.forEach(meal => {
        meal.price = Math.floor(Math.random() * (200 - 50 + 1)) + 50; // تخصيص سعر عشوائي بين 50 و 200
      });
    })
  }
  onPageChange(event:number){
    this.currentPage=event
  }
  routerDetailsMeals(id:string){
    this.router.navigateByUrl(`Meal/${id}`)
  }
}
