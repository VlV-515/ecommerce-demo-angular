import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartModel } from '../models';
import * as toastr from 'toastr';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private arrCart$ = new BehaviorSubject<CartModel[]>([]);
  constructor() {}
  public getArrCart$(): Observable<CartModel[]> {
    return this.arrCart$.asObservable();
  }
  public addProductToCart(product: CartModel): void {
    const arrCart = this.arrCart$.getValue();
    let addToArr = true;
    arrCart.forEach((element) => {
      if (element.id === product.id) {
        addToArr = false;
        element.quantity = Number(element.quantity) + Number(product.quantity);
      }
    });
    if (addToArr) arrCart.push(product);
    this.arrCart$.next(arrCart);
    toastr.success('Product added to cart successfully.', undefined, {
      positionClass: 'toast-bottom-right',
    });
  }
  public deleteProductFromCart(id: number): void {
    const arrCart = this.arrCart$.getValue();
    const newArrCart = arrCart.filter((item) => item.id !== id);
    this.arrCart$.next(newArrCart);
    toastr.success('Product deleted from cart successfully.', undefined, {
      positionClass: 'toast-bottom-right',
    });
  }
  public getLengthArrCart(): number {
    return this.arrCart$.getValue().length;
  }
}
