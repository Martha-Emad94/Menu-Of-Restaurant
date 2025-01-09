import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports:[MatToolbarModule,CommonModule,FormsModule,SidebarComponent,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isSidebarVisible: boolean = false;
  isScrolled = false;
  constructor(private router:Router,private rout:ActivatedRoute){

  }
  Router(){
    this.router.navigateByUrl("/menu");
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollTop > 50; 
  }
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
  closeSidebar() {
    this.isSidebarVisible = false;
  }
}
