import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LaptopComponent } from './laptop/laptop.component';
import { MyLibComponent } from './puthu-lib.component';



@NgModule({
  declarations: [
    MyLibComponent,
    LaptopComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyLibComponent,
    LaptopComponent
  ]
})
export class MyLibModule { }
