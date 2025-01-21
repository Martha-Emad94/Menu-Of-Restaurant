import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Meals } from '../../interfaces/meals';
import { forkJoin } from 'rxjs';
import { Drinks } from '../../interfaces/drinks';

@Injectable({
  providedIn: 'root'
})
export class MealsService {
  private mealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=';
  private drinksUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  constructor(private http: HttpClient) {}
  getMeals(): Observable<{category: string, meals: Meals[] ,drinks:any[]}[]> {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'; // All letters to filter meals
    const requestsmeals = Array.from(alphabet).map((letter) =>
      this.http.get<{ meals: Meals[] }>(`${this.mealsUrl}${letter}`).pipe(
        map((response) => response.meals || []) // Handle cases with no results
      )
    );
    const requestsdrinks = Array.from(alphabet).map(letter =>
      this.http.get<{ drinks: any[] }>(`${this.drinksUrl}${letter}`).pipe(
        map(response => response.drinks || [])
      )
    );

    // Combine all requests into a single observable
    return forkJoin([...requestsmeals, ...requestsdrinks]).pipe(
      map((results) => {
        // Split the results into meals and drinks
        const allMeals = results.slice(0, alphabet.length).flat();
        const allDrinks = results.slice(alphabet.length).flat();

        // Categorize meals
        const categorizedMeals = [
          {
            category: 'Starter',
            meals: allMeals.filter((meal) => meal.strCategory === 'Starter'),
            drinks: allDrinks,
          },
          {
            category: 'Breakfast',
            meals: allMeals.filter((meal) => meal.strCategory === 'Breakfast'),
            drinks:allDrinks ,
          },
          {
            category: 'Lunch',
            meals: allMeals.filter((meal) =>
              ['Beef', 'Chicken', 'Lamb', 'Miscellaneous', 'Pasta'].includes(
                meal.strCategory
              )
            ),
            drinks: allDrinks,
          },
          {
            category: 'Dinner',
            meals: allMeals.filter((meal) =>
              ['Goat', 'Pork', 'Seafood', 'Side', 'Vegan', 'Vegetarian'].includes(
                meal.strCategory
              )
            ),
            drinks:allDrinks,
          },
          {
            category: 'Dessert',
            meals: allMeals.filter((meal) => meal.strCategory === 'Dessert'),
            drinks: allDrinks,
          },
          { category: 'Drinks', meals: [], drinks: allDrinks },
        ];

        // Add drinks as a separate category if needed
       

        return categorizedMeals;
      })
    );
  }
}

