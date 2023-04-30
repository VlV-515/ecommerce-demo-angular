import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { IndexProductsComponent } from './components/index-products/index-products.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SearchTabProductsComponent } from './components/search-tab-products/search-tab-products.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { PaginatorProductsComponent } from './components/paginator-products/paginator-products.component';

@NgModule({
  declarations: [
    IndexProductsComponent,
    SearchTabProductsComponent,
    CardProductComponent,
    PaginatorProductsComponent,
  ],
  imports: [CommonModule, ProductsRoutingModule, MaterialModule],
})
export class ProductsModule {}
