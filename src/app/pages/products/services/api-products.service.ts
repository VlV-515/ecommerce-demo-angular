import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  PaginatorModel,
  ProductModel,
  ResponseCategoriesType,
  ResponseProductsModel,
} from '../interfaces';
import { BehaviorSubject, Observable, tap } from 'rxjs';

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
  private arrcategories$ = new BehaviorSubject<ResponseCategoriesType>([]);
  constructor(private readonly http: HttpClient) {
    this.getAllProducts();
    this.getAllCategories();
  }
  public getArrProducts(): Observable<ProductModel[]> {
    return this.arrProducts$.asObservable();
  }
  public getArrCategories(): Observable<ResponseCategoriesType> {
    return this.arrcategories$.asObservable();
  }
  public changeCategory(category: string): void {
    this.infoPaginator.currentPage = 1;
    if (category === '') return this.getAllProducts();
    this.getproductsByCategory(category);
  }
  public changePageSearch(page: number): void {
    this.infoPaginator.currentPage = page;
    this.getAllProducts();
  }
  private getAllProducts(): void {
    const skip = this.infoPaginator.currentPage * this.infoPaginator.limit;
    const params = new HttpParams()
      .append('limit', this.infoPaginator.limit.toString())
      .append('skip', skip.toString());
    const url = 'https://dummyjson.com/products';
    this.http
      .get<ResponseProductsModel>(url, { params })
      .pipe(
        tap((res) => {
          this.arrProducts$.next(res.products || []);
          this.infoPaginator.total = res.total;
        })
      )
      .subscribe();
  }

  private getAllCategories(): void {
    const url = 'https://dummyjson.com/products/categories';
    this.http
      .get<ResponseCategoriesType>(url)
      .pipe(tap((res) => this.arrcategories$.next(res)))
      .subscribe();
  }

  private getproductsByCategory(category: string): void {
    const url = `https://dummyjson.com/products/category/${category}`;
    this.http
      .get<ResponseProductsModel>(url)
      .pipe(
        tap((res) => {
          this.arrProducts$.next(res.products || []);
          this.infoPaginator.total = res.total;
        })
      )
      .subscribe();
  }
}
