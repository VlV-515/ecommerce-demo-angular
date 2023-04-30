import { ProductModel } from '.';

export interface ResponseProductsModel {
  products: ProductModel[];
  total: number;
  skip: number;
  limit: number;
}
