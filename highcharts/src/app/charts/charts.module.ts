import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [ChartsComponent, HighchartsComponent, EchartsComponent],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    HighchartsChartModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
  ],
})
export class ChartsModule {}
