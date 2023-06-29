import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartModel } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private arrCart$ = new BehaviorSubject<CartModel[]>([]);
  constructor() {}
  public getArrCart(): Observable<CartModel[]> {
    return this.arrCart$.asObservable();
  }
  public addProductToCart(product: CartModel): void {
    const arrCart = this.arrCart$.getValue();
    arrCart.push(product);
    this.arrCart$.next(arrCart);
  }
  public deleteProductFromCart(id: number): void {
    const arrCart = this.arrCart$.getValue();
    const newArrCart = arrCart.filter((item) => item.id !== id);
    this.arrCart$.next(newArrCart);
  }
}
