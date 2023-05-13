import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ResponseCategoriesType } from '../../interfaces';
import { ApiProductsService } from '../../services/api-products.service';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-search-tab-products',
  templateUrl: './search-tab-products.component.html',
  styleUrls: [],
})
export class SearchTabProductsComponent {
  arrCategories$ = new Observable<ResponseCategoriesType>();

  constructor(private readonly apiProductsSvc: ApiProductsService) {
    this.arrCategories$ = apiProductsSvc.getArrCategories();
  }

  public changeCategory(event: MatSelectChange): void {
    const valueCategory = event.value;
    this.apiProductsSvc.changeCategory(valueCategory);
  }
}
