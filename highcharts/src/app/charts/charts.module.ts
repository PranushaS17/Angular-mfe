import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HighchartsChartModule } from 'highcharts-angular';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartsRoutingModule } from './charts-routing.module';
import { ChartsComponent } from './charts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { DynamicEchartsComponent } from './dynamic-echarts/dynamic-echarts.component';
import { DoughnutEchartComponent } from './shared/doughnut-echart/doughnut-echart.component';
import { SemiDoughnutEchartComponent } from './shared/semi-doughnut-echart/semi-doughnut-echart.component';

@NgModule({
  declarations: [
    ChartsComponent,
    HighchartsComponent,
    EchartsComponent,
    DynamicEchartsComponent,
    DoughnutEchartComponent,
    SemiDoughnutEchartComponent,
  ],
  imports: [
    CommonModule,
    ChartsRoutingModule,
    HighchartsChartModule,
    NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
  ],
})
export class ChartsModule {}
