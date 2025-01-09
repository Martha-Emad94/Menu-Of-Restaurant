import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

import { ButtonComponent } from "./shared component/button/button.component";
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, ButtonComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Restaurant';
}
