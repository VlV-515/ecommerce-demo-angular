import { Component } from '@angular/core';
import { Observable, debounceTime } from 'rxjs';
import { ResponseCategoriesType } from '../../interfaces';
import { ApiProductsService } from '../../services/api-products.service';
import { MatSelectChange } from '@angular/material/select';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-tab-products',
  templateUrl: './search-tab-products.component.html',
  styleUrls: [],
})
export class SearchTabProductsComponent {
  inputSearch = new FormControl('');
  arrCategories$ = new Observable<ResponseCategoriesType>();

  constructor(private readonly apiProductsSvc: ApiProductsService) {
    this.arrCategories$ = apiProductsSvc.getArrCategories();
    this.createSubscriptionInputSearch();
  }

  public changeCategory(event: MatSelectChange): void {
    const valueCategory = event.value;
    this.apiProductsSvc.changeCategory(valueCategory);
  }

  private createSubscriptionInputSearch(): void {
    this.inputSearch.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => this.apiProductsSvc.changeSearch(value));
  }
}
