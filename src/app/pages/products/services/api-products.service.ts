import { Injectable } from '@angular/core';
import {
  PaginatorModel,
  ProductModel,
  ResponseProductsModel,
} from '../interfaces';
import { BehaviorSubject, Observable, catchError, switchMap, tap } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiProductsService {
  infoPaginator: PaginatorModel = {
    currentPage: 1,
    limit: 10,
    total: 0,
  };
  private arrProducts$ = new BehaviorSubject<ProductModel[]>([]);
  constructor(private readonly http: HttpClient) {
    this.getAllProducts();
  }
  getArrProducts(): Observable<ProductModel[]> {
    return this.arrProducts$.asObservable();
  }
  getAllProducts(): void {
    const skip = this.infoPaginator.currentPage * this.infoPaginator.limit;
    const params = new HttpParams()
      .append('limit', this.infoPaginator.limit.toString())
      .append('skip', skip.toString());
    const url = 'https://dummyjson.com/products';
    this.http
      .get<ResponseProductsModel>(url, { params })
      .pipe(
        tap((res) => {
          console.log({ res });
          this.arrProducts$.next(res.products || []);
          this.infoPaginator.total = res.total;
        })
      )
      .subscribe();
  }
  changePageSearch(page: number): void {
    this.infoPaginator.currentPage = page;
    this.getAllProducts();
  }
}
