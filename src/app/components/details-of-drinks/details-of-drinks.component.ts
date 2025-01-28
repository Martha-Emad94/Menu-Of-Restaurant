import { Component, OnInit } from '@angular/core';
import { Meals } from '../../interfaces/meals';
import { MealsService } from '../services/meals.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Drinks } from '../../interfaces/drinks';

@Component({
  selector: 'app-details-of-drinks',
  standalone: true,
  imports: [HttpClientModule ,FormsModule,CommonModule],
 providers:[MealsService],
 templateUrl: './details-of-drinks.component.html',
  styleUrl: './details-of-drinks.component.css'
})
export class DetailsOfDrinksComponent implements OnInit {
  drinkId:number=0;
  filterDrinks:Drinks|undefined;
  totalDrinks:number=0;

  constructor(private mealsService:MealsService,private router:Router,private rout:ActivatedRoute){}

  ngOnInit(): void {
    this.mealsService.getMeals().subscribe(drinks=>{
      this.totalDrinks=drinks.length;
    })
    this.drinkId=Number(this.rout.snapshot.paramMap.get('id'))
    if(this.drinkId){
      console.log('this.drinkId', this.drinkId)
      this.fetchDrinksByID(this.drinkId)
    }
  }
  fetchDrinksByID(id: number): void {
    this.mealsService.getDrinksById(id).subscribe({
      next: (res) => {
        if (res && Array.isArray(res.drinks) && res.drinks.length > 0) {
          this.filterDrinks = res.drinks[0];
          if (this.filterDrinks) {
            this.filterDrinks.price = Math.floor(Math.random() * (100 - 30 + 1)) + 30;;
          }
        } else {
          console.warn('No drink found for the given ID');
        }
      },
      error: (error) => {
        console.error('Error fetching drink:', error);
      },
    });
  }

 
  Back(){
    this.router.navigateByUrl("/menu");
  }
  prev() {
    this.drinkId=Number(this.rout.snapshot.paramMap.get('id'))
    const prev=this.drinkId-1;
    if (prev > 0 ) {
      this.fetchDrinksByID(prev);
      this.router.navigateByUrl(`Drink/${prev}`);
     
    } 
  }

  // Navigate to the next meal
  next() {
    this.drinkId=Number(this.rout.snapshot.paramMap.get('id'))
    const next=this.drinkId+1;
    if (next > 0 ) {
      this.fetchDrinksByID(next);
      this.router.navigateByUrl(`Drink/${next}`);
     
    }
}
}

