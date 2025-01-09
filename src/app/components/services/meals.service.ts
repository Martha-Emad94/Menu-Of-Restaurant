import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Meals } from '../../interfaces/meals';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private mealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
  private drinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  constructor(private http: HttpClient) {}

  getMeals(): Observable<{
   category: string, meals: Meals[] 
}[]> {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // All letters to filter meals
    const requests = Array.from(alphabet).map((letter) =>
      this.http.get<{ meals: Meals[] }>(`${this.mealsUrl}${letter}`).pipe(
        map((response) => response.meals || []) // Handle cases with no results
      )
    );

    // Combine all requests into a single observable
    return forkJoin(requests).pipe(
      map((results) => {
        // Flatten the array of arrays into one array and group meals by category
        const allMeals = results.flat();
        
        // Manually categorize the meals (you can change this logic to suit your needs)
        const categorizedMeals = [
          { category: 'Starter', meals: allMeals.filter(meal => meal.strCategory === 'Starter') },
          { category: 'Breakfast', meals: allMeals.filter(meal => meal.strCategory === 'Breakfast') },
          { category: 'Lunch', meals: allMeals.filter(meal => meal.strCategory === 'Beef' || meal.strCategory === 'Chicken'
            ||meal.strCategory === 'Lamb' ||meal.strCategory === 'Miscellaneous' ||meal.strCategory === 'Pasta') }, 
          { category: 'Dinner', meals: allMeals.filter(meal => meal.strCategory === 'Goat'||meal.strCategory === 'Pork'
            ||meal.strCategory === 'Seafood'  ||meal.strCategory === 'Side'  ||meal.strCategory === 'Vegan'  ||meal.strCategory === 'Vegetarian' 
          ) },
          { category: 'Dessert', meals: allMeals.filter(meal => meal.strCategory === 'Dessert') },

        ];

        return categorizedMeals;
      })
    );
  }
  getDrinks(): Observable<any[]> {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const requests = Array.from(alphabet).map(letter =>
      this.http.get<{ drinks: any[] }>(`${this.drinksUrl}${letter}`).pipe(
        map(response => response.drinks || [])
      )
    );
    return forkJoin(requests).pipe(map(results => results.flat()));
  }
  
}
