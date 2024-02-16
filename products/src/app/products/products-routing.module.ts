import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LaptopsComponent } from './components/laptops/laptops.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'order',
        component: OrderComponent,
      },
      {
        path: 'laptop',
        component: LaptopsComponent,
      },
      {
        path: 'mobile',
        component: MobileComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'laptop',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
