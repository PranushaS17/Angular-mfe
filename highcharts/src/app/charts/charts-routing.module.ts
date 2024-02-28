import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsComponent } from './charts.component';
import { DynamicEchartsComponent } from './dynamic-echarts/dynamic-echarts.component';
import { EchartsComponent } from './echarts/echarts.component';
import { HighchartsComponent } from './highcharts/highcharts.component';

const routes: Routes = [
  {
    path: '',
    component: ChartsComponent,
    children: [
      {
        path: 'highcharts',
        component: HighchartsComponent,
      },
      {
        path: 'echarts',
        component: EchartsComponent,
      },
      {
        path: 'dynamic-echarts',
        component: DynamicEchartsComponent,
      },
      {
        path: '',
        redirectTo: 'highcharts',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChartsRoutingModule {}
