import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCartComponent } from '../modal-cart/modal-cart.component';
import { CartService } from '../../services/cart.service';
import * as toastr from 'toastr';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(
    private readonly dialog: MatDialog,
    private readonly cartSvc: CartService
  ) {}
  public btnCart(): void {
    if (this.cartSvc.getLengthArrCart() === 0) {
      toastr.info('Cart is empty');
      return;
    }
    this.dialog.open(ModalCartComponent, {
      maxWidth: '50vw',
      maxHeight: '80vh',
    });
  }
}
