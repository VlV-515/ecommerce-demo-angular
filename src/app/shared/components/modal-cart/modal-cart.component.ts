import { CartService } from 'src/app/shared/services/cart.service';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CartModel } from '../../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal-cart',
  templateUrl: './modal-cart.component.html',
  styleUrls: ['./modal-cart.component.scss'],
})
export class ModalCartComponent {
  arrCart$!: Observable<CartModel[]>;
  constructor(
    public readonly dialogRef: MatDialogRef<ModalCartComponent>,
    private readonly cartSvc: CartService
  ) {
    this.arrCart$ = this.cartSvc.getArrCart();
  }

  public removeProduct(product: CartModel): void {
    this.cartSvc.deleteProductFromCart(product.id);
    this.dialogRef.close();
  }
}
