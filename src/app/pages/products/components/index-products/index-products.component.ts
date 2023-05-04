import { Component, OnInit } from '@angular/core';
import { PaginatorModel, ResponseProductsModel } from '../../interfaces';
import { Observable, of } from 'rxjs';
import { dataMockAllProducts } from '../../assets/dataMock';

@Component({
  selector: 'app-index-products',
  templateUrl: './index-products.component.html',
  styleUrls: ['./index-products.component.scss'],
})
export class IndexProductsComponent implements OnInit {
  arrProducts$ = new Observable<ResponseProductsModel>();
  infoPaginator: PaginatorModel = {
    currentPage: 1,
    limit: 10,
    total: 59,
  };
  constructor() {
    this.arrProducts$ = of(dataMockAllProducts);
  }

  ngOnInit(): void {}
}
