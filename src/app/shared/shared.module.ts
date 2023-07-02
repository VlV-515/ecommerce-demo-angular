import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ModalCartComponent } from './components/modal-cart/modal-cart.component';

@NgModule({
  declarations: [NavbarComponent, ModalCartComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent, RouterModule],
  entryComponents: [ModalCartComponent],
})
export class SharedModule {}
