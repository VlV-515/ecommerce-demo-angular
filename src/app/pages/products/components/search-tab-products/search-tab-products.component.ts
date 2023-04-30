import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dataMockAllCategories } from '../../assets/dataMock';
import { ResponseCategoriesType } from '../../interfaces';

@Component({
  selector: 'app-search-tab-products',
  templateUrl: './search-tab-products.component.html',
  styleUrls: [],
})
export class SearchTabProductsComponent {
  arrCategories$ = new Observable<ResponseCategoriesType>();

  constructor() {
    this.arrCategories$ = of(dataMockAllCategories);
  }
}
