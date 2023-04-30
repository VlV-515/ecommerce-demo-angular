import { Component, OnInit } from '@angular/core';
import { ResponseProductsModel } from '../../interfaces';
import { Observable, of } from 'rxjs';
import { dataMockAllProducts } from '../../assets/dataMock';

@Component({
  selector: 'app-index-products',
  templateUrl: './index-products.component.html',
  styleUrls: ['./index-products.component.scss'],
})
export class IndexProductsComponent implements OnInit {
  arrProducts$ = new Observable<ResponseProductsModel>();
  constructor() {
    this.arrProducts$ = of(dataMockAllProducts);
  }

  ngOnInit(): void {}
}
