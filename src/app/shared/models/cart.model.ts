import { ProductModel } from 'src/app/pages/products/interfaces';

export interface CartModel extends ProductModel {
  quantity?: number;
}
