import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MealsService } from '../services/meals.service';
import { Meals } from '../../interfaces/meals';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Category } from '../../interfaces/category';
@Component({
  selector: 'app-details-of-menu',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule],
  providers:[MealsService],
  templateUrl: './details-of-menu.component.html',
  styleUrl: './details-of-menu.component.css'
})
export class DetailsOfMenuComponent implements OnInit {
  mealsByCategory:Category[] = [];
  mealId:number=0;
  filterMeal:Meals|undefined;
  totalMeals:number=0;

  constructor(private mealsService:MealsService,private router:Router,private rout:ActivatedRoute){}

  ngOnInit(): void {
    this.mealsService.getMeals().subscribe(meals=>{
      this.totalMeals=meals.length;
    })
    this.mealId=Number(this.rout.snapshot.paramMap.get('id'))
    if(this.mealId){
      console.log('this.mealId', this.mealId)
      this.FetchMealsByID(this.mealId)
    }
  }
  FetchMealsByID(id:number){
    this.mealsService.getMealsById(id).subscribe({
      next: (res) => {
        if (res && Array.isArray(res.meals) && res.meals.length > 0) {
          this.filterMeal = res.meals[0]; 
          if (this.filterMeal) {
            this.filterMeal.price = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
          }          console.log('Fetched Meal:', this.filterMeal); // Debugging
        } else {
          console.warn('No meal found for the given ID');
        }
      },
      error:(error=>{
        console.log('error', error)
      })
    })
  }
 
  Back(){
    this.router.navigateByUrl("/menu");
  }
  prev() {
    this.mealId=Number(this.rout.snapshot.paramMap.get('id'))
    const prev=this.mealId-1;
    if (prev > 0 ) {
      this.FetchMealsByID(prev);
      this.router.navigateByUrl(`Meal/${prev}`);
     
    } 
  }

  // Navigate to the next meal
  next() {
    this.mealId=Number(this.rout.snapshot.paramMap.get('id'))
    const next=this.mealId+1;
    if (next > 0 ) {
      this.FetchMealsByID(next);
      this.router.navigateByUrl(`Meal/${next}`);
     
    }
}
}
