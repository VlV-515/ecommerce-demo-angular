import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexHomeComponent } from './components/index-home/index-home.component';

@NgModule({
  declarations: [IndexHomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
