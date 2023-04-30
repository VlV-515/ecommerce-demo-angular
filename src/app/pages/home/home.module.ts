import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IndexHomeComponent } from './components/index-home/index-home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from 'src/app/shared/material.module';

@NgModule({
  declarations: [IndexHomeComponent],
  imports: [CommonModule, HomeRoutingModule, SharedModule, MaterialModule],
})
export class HomeModule {}
