import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BtsCustomLibModule } from 'bts-custom-lib';
import { MyLibModule } from 'puthu-lib';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { MobileComponent } from './components/mobile/mobile.component';


@NgModule({
  declarations: [
    ProductsComponent,
    OrderComponent,
    LaptopsComponent,
    MobileComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    MyLibModule,
    BtsCustomLibModule
  ]
})
export class ProductsModule { }
