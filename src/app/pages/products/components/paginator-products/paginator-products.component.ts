import { Component, Input } from '@angular/core';
import { PaginatorModel } from '../../interfaces';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-paginator-products',
  templateUrl: './paginator-products.component.html',
  styleUrls: ['./paginator-products.component.scss'],
})
export class PaginatorProductsComponent {
  refPaginador!: PaginatorModel;
  constructor(public apiProductsSvc: ApiProductsService) {
    this.refPaginador = this.apiProductsSvc.infoPaginator;
  }
  public changePage(numPage: number): void {
    this.apiProductsSvc.changePageSearch(numPage);
  }
}
