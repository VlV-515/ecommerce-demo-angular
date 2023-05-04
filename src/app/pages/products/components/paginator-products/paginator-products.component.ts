import { Component, Input } from '@angular/core';
import { PaginatorModel } from '../../interfaces';

@Component({
  selector: 'app-paginator-products',
  templateUrl: './paginator-products.component.html',
  styleUrls: ['./paginator-products.component.scss'],
})
export class PaginatorProductsComponent {
  @Input() infoPaginator!: PaginatorModel;
  constructor() {}
  public changePage(numPage: number): void {
    this.infoPaginator.currentPage = numPage;
  }
}
