import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

// import { BtsCustomLibModule } from 'bts-custom-lib';
import { MyLibModule } from 'puthu-lib';
import { FiltersComponent } from './components/filters/filters.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { MobileComponent } from './components/mobile/mobile.component';
import { OrderComponent } from './components/order/order.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [
    ProductsComponent,
    OrderComponent,
    LaptopsComponent,
    MobileComponent,
    FiltersComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    // BrowserAnimationsModule,
    MyLibModule,
    // BtsCustomLibModule,
    InputTextModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ProductsModule {}
