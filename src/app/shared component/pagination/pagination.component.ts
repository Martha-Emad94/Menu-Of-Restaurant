import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports:[MatPaginatorModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() totalItems: number=0;
  @Input() pageSize: number=0;
  @Output() pageChanged = new EventEmitter<PageEvent>();
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;


  onPageChange(event: PageEvent) {
    this.pageChanged.emit(event);
  }
}
