import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { IndexProductsComponent } from './index-products/index-products.component';

@NgModule({
  declarations: [IndexProductsComponent],
  imports: [CommonModule, ProductsRoutingModule],
})
export class ProductsModule {}
