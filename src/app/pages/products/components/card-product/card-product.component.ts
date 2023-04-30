import { Component, Input } from '@angular/core';
import { ProductModel } from '../../interfaces';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent {
  @Input() arrProducts: ProductModel[] = [];
  constructor() {}
}
