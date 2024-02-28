import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-echarts',
  templateUrl: './dynamic-echarts.component.html',
  styleUrls: ['./dynamic-echarts.component.scss'],
})
export class DynamicEchartsComponent {
  public doughnutchartOptions = {
    data: [
      { name: 'Booked', value: 948, color: '#FE575E' },
      { name: 'At Origin Hub', value: 786, color: '#00BC6F' },
      { name: 'En Route To Destination', value: 627, color: '#0078BC' },
      { name: 'At Destination Hub', value: 192, color: '#FA9D5A' },
      { name: 'Delivery Scheduled', value: 469, color: '#A54BFF' },
      { name: 'Exception', value: 205, color: '#4BA9FF' },
    ],
    legend: 'vertical',
    title: 'Active orders',
  };

  public semiDoughnutChartOptions = {
    data: [
      { name: 'Expires in 30 days', value: 300, color: '#49CC8D' },
      { name: 'Expires in 10 days', value: 150, color: '#FA9D5A' },
      { name: 'Expires in 3 days', value: 35, color: '#FA5A5A' },
    ],
    legend: 'horizontal',
    title: 'Quotes',
    text: '485\nTotal Quotes',
  };
}
