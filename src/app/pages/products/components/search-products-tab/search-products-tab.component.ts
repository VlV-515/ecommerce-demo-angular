import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { dataMockAllCategories } from '../../assets/dataMock';
import { ResponseCategoriesType } from '../../interfaces';

@Component({
  selector: 'app-search-products-tab',
  templateUrl: './search-products-tab.component.html',
  styleUrls: [],
})
export class SearchProductsTabComponent {
  arrCategories$ = new Observable<ResponseCategoriesType>();

  constructor() {
    this.arrCategories$ = of(dataMockAllCategories);
  }
}
