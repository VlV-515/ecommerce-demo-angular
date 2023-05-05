import { Component } from '@angular/core';
import { ApiProductsService } from '../../services/api-products.service';
import { Observable } from 'rxjs';
import { ProductModel } from '../../interfaces';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.scss'],
})
export class TableProductsComponent {
  arrProducts$: Observable<ProductModel[]>;
  constructor(private readonly apiProductsSvc: ApiProductsService) {
    this.arrProducts$ = this.apiProductsSvc.getArrProducts();
  }
}
