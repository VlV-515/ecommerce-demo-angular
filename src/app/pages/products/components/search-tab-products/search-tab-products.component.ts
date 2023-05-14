import { Component, OnDestroy } from '@angular/core';
import {
  Observable,
  Subject,
  debounceTime,
  distinctUntilChanged,
  takeUntil,
} from 'rxjs';
import { ResponseCategoriesType } from '../../interfaces';
import { ApiProductsService } from '../../services/api-products.service';
import { MatSelectChange } from '@angular/material/select';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-tab-products',
  templateUrl: './search-tab-products.component.html',
  styleUrls: [],
})
export class SearchTabProductsComponent implements OnDestroy {
  inputSearch = new FormControl('');
  arrCategories$ = new Observable<ResponseCategoriesType>();
  private destroySub$ = new Subject<void>();

  constructor(private readonly apiProductsSvc: ApiProductsService) {
    this.arrCategories$ = apiProductsSvc.getArrCategories();
    this.createSubscriptionInputSearch();
  }

  ngOnDestroy(): void {
    this.destroySub$.next();
    this.destroySub$.complete();
  }

  public changeCategory(event: MatSelectChange): void {
    const valueCategory = event.value;
    this.apiProductsSvc.changeCategory(valueCategory);
  }

  private createSubscriptionInputSearch(): void {
    this.inputSearch.valueChanges
      .pipe(
        takeUntil(this.destroySub$),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((value) => this.apiProductsSvc.changeSearch(value));
  }
}
