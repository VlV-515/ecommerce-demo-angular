import { Component } from '@angular/core';
import { ApiProductsService } from '../../services/api-products.service';
import { Observable } from 'rxjs';
import { ProductModel } from '../../interfaces';
import { CartModel } from 'src/app/shared/models';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.scss'],
})
export class TableProductsComponent {
  arrProducts$: Observable<ProductModel[]>;
  constructor(
    private readonly apiProductsSvc: ApiProductsService,
    private readonly cartSvc: CartService
  ) {
    this.arrProducts$ = this.apiProductsSvc.getArrProducts();
  }
  public addCart(product: ProductModel, inputValue: any): void {
    const objProducto: Partial<CartModel> = product;
    objProducto.quantity = inputValue;
    this.cartSvc.addProductToCart(objProducto as CartModel);
  }
}
