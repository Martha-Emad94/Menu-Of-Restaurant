import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatPaginatorModule, NgxPaginationModule],
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
 
  @Output() pageChanged = new EventEmitter<number>();
  

  changePage(event: number) {
    this.pageChanged.emit(event);
  }
 
}


