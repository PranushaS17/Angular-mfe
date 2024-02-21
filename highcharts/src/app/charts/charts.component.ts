import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
})
export class ChartsComponent implements OnInit {
  public doughnutChartData = [
    { name: 'Category 1', y: 25 },
    { name: 'Category 2', y: 10 },
    { name: 'Category 3', y: 15 },
    { name: 'Category 4', y: 25 },
    { name: 'Category 4', y: 25 },
  ];
  public Highcharts: typeof Highcharts = Highcharts;
  // chartConstructor: string = 'chart';
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) {};
  // updateFlag: boolean = false;
  // oneToOneFlag: boolean = true;
  // runOutsideAngular: boolean = false;

  public lineChartOptions!: Highcharts.Options;

  public doughnutChartOptions!: Highcharts.Options;

  ngOnInit() {
    this.setLineChartProps();
    this.setDoughnutChartProps();
  }

  private setDoughnutChartProps() {
    this.doughnutChartOptions = {
      title: {
        text: 'Doughnut chart',
        align: 'center',
      },
      chart: {
        type: 'pie',
      },
      // TODO: explore legend
      legend: {
        enabled: true,
      },
      plotOptions: {
        pie: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            crop: false,
            distance: -70,
            // style: {
            //   fontWeight: 'bold',
            //   fontSize: '16px',
            // },
          },
          // startAngle: -90,
          // endAngle: 90,
          // center: ['50%', '75%'],
          size: '100%',
        },
      },
      colors: ['#FCE700', '#F8C4B4', '#f6e1ea', '#B8E8FC', '#BCE29E'],
      series: [
        {
          type: 'pie',
          name: 'Dummy data',
          data: this.doughnutChartData,
          innerSize: '70%'
        },
      ],
    };
  }

  private setLineChartProps() {
    this.lineChartOptions = {
      series: [
        {
          type: 'line',
          data: [1, 2, 3, 4, 5],
        },
      ],
      title: { text: 'Line chart' },
      caption: {
        text: 'Simple line chart',
        align: 'center',
        // floating: false,
        margin: 2,
        style: {
          color: 'green',
          fontSize: 14,
        },
      },
      credits: {
        enabled: false,
      },
    };
  }
}
