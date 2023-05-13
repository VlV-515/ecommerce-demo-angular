import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { IndexProductsComponent } from './components/index-products/index-products.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SearchTabProductsComponent } from './components/search-tab-products/search-tab-products.component';
import { PaginatorProductsComponent } from './components/paginator-products/paginator-products.component';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexProductsComponent,
    SearchTabProductsComponent,
    PaginatorProductsComponent,
    TableProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
