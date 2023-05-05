import { Component, Input } from '@angular/core';
import { ProductModel } from '../../interfaces';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent {
  arrProducts$: any;
  constructor(private readonly apiProductsSvc: ApiProductsService) {
    this.arrProducts$ = this.apiProductsSvc.getArrProducts();
  }
}
