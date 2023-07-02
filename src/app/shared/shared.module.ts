import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { ModalCartComponent } from './components/modal-cart/modal-cart.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, ModalCartComponent, FooterComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavbarComponent, RouterModule, FooterComponent],
  entryComponents: [ModalCartComponent],
})
export class SharedModule {}
