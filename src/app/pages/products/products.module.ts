import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { IndexProductsComponent } from './components/index-products/index-products.component';
import { MaterialModule } from 'src/app/shared/material.module';
import { SearchProductsTabComponent } from './components/search-products-tab/search-products-tab.component';

@NgModule({
  declarations: [IndexProductsComponent, SearchProductsTabComponent],
  imports: [CommonModule, ProductsRoutingModule, MaterialModule],
})
export class ProductsModule {}
