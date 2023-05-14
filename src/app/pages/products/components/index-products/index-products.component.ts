import { Component, OnDestroy } from '@angular/core';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-index-products',
  templateUrl: './index-products.component.html',
  styleUrls: ['./index-products.component.scss'],
})
export class IndexProductsComponent implements OnDestroy {
  constructor(private readonly apiProductsSvc: ApiProductsService) {}
  ngOnDestroy(): void {
    this.apiProductsSvc.destroySubscriptions();
  }
}
