import { Component, OnInit } from '@angular/core';
import * as toastr from 'toastr';

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.scss'],
})
export class IndexHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  public btnNotify(): void {
    toastr.success('¡La operación se ha completado con éxito!');
  }
}
