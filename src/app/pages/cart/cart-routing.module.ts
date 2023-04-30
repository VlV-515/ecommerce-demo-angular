import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexCartComponent } from './components/index-cart/index-cart.component';

const routes: Routes = [
  {
    path: '',
    component: IndexCartComponent,
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
