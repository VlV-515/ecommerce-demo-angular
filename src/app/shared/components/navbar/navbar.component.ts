import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalCartComponent } from '../modal-cart/modal-cart.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private readonly dialog: MatDialog) {}
  public btnCart(): void {

    this.dialog.open(ModalCartComponent, {
      maxWidth: '50vw',
      maxHeight: '80vh',
    });
  }
}
