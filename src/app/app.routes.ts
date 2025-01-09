import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {
        path: 'menu',
        loadComponent: () =>
          import('../app/components/menu/menu.component').then((m) => m.MenuComponent),
    },
];
