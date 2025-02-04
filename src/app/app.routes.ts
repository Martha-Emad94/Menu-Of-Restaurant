import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoryOfMealsComponent } from './components/category-of-meals/category-of-meals.component';
import { CatergoryOfDrinksComponent } from './components/catergory-of-drinks/catergory-of-drinks.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { DetailsOfMenuComponent } from './components/details-of-menu/details-of-menu.component';
import { DetailsOfDrinksComponent } from './components/details-of-drinks/details-of-drinks.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {
        path: 'menu',
        loadComponent: () =>
          import('../app/components/menu/menu.component').then((m) => m.MenuComponent),
    },
    {path:'about',component:AboutComponent},
    {path:'contact',component:ContactComponent},
    {path:'Reservation',component:ReservationComponent},
    { path: 'Category/meals/:category',
      loadComponent:()=>import('../app/components/category-of-meals/category-of-meals.component')
      .then((m)=>m.CategoryOfMealsComponent)
     },
    { path: 'Category/drinks/:category', 
      loadComponent:()=>import('../app/components/catergory-of-drinks/catergory-of-drinks.component')
      .then((m)=>m.CatergoryOfDrinksComponent)
    },
    {path:'Meal/:id',
      loadComponent:()=>
        import('../app/components/details-of-menu/details-of-menu.component').then((m)=>m.DetailsOfMenuComponent)
    },
    {path:'Drink/:id',
      loadComponent:()=>
        import('../app/components/details-of-drinks/details-of-drinks.component').then((m)=>m.DetailsOfDrinksComponent)
    },
    {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'reserver',
            component: ReservationComponent, // مكون الحجز كطفل لـ HomeComponent
          },
        ],
      },
];
