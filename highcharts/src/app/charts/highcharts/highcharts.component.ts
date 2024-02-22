import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.scss'],
})
export class HighchartsComponent implements OnInit {
  public doughnutChartData = [
    { name: 'Booked', y: 948 },
    { name: 'At Origin Hub', y: 786 },
    { name: 'En Route To Destination', y: 627 },
    { name: 'At Destination Hub', y: 192 },
    { name: 'Delivery Scheduled', y: 469 },
    { name: 'Exception', y: 205 },
  ];
  public Highcharts: typeof Highcharts = Highcharts;
  // chartConstructor: string = 'chart';
  // chartCallback: Highcharts.ChartCallbackFunction = function (chart) {};
  // updateFlag: boolean = false;
  // oneToOneFlag: boolean = true;
  // runOutsideAngular: boolean = false;

  public lineChartOptions!: Highcharts.Options;

  public doughnutChartOptions!: Highcharts.Options;
  public doughnutChartOptionsV!: Highcharts.Options;

  ngOnInit() {
    this.setLineChartProps();
    this.setDoughnutChartProps();
    this.setDoughnutChartVerticalLegendProps();
  }

  private setDoughnutChartVerticalLegendProps() {
    this.doughnutChartOptionsV = {
      title: {
        text: 'Doughnut chart with vertical legend',
        align: 'center',
      },
      chart: {
        type: 'pie',
      },
      legend: {
        enabled: true,
        align: 'center',
        alignColumns: true,
        layout: 'vertical',
        margin: 10,
        padding: 8,
        borderRadius: 0,
        // borderWidth: 2,
        useHTML: true,
        // width: '100%',
        itemMarginTop: 10,
        labelFormat: `<div style="width:30vh;padding-left:2%"><span style="float:left">{name}</span><b style="float:right">{y}</b></div>`,
        symbolRadius: 0, // to make icon as square
        symbolHeight: 12,
        symbolWidth: 7,
        squareSymbol: false,
        // labelFormatter: function () {
        //   return (
        //     '<div style="width:30vh;"><span style="float:left;color:#ccc">' +
        //     this.name +
        //     '</span><span style="float:right">' +
        //     this.percentage.toFixed(0) +
        //     '%</span></div>'
        //   );
        // },
      },
      tooltip: {
        // pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
        enabled: false,
      },
      plotOptions: {
        pie: {
          borderWidth: 3,
          borderColor: '#ffff',
          dataLabels: {
            enabled: false, // labels on chart
            crop: false,
            distance: -70,
          },
          size: '100%',
          borderRadius: 5,
          showInLegend: true, // labels at the bottom of the chart
        },
      },
      colors: [
        '#FE575E',
        '#00BC6F',
        '#0078BC',
        '#FA9D5A',
        '#A54BFF',
        '#4BA9FF',
      ],
      series: [
        {
          type: 'pie',
          name: 'Dummy data',
          data: this.doughnutChartData,
          innerSize: '60%',
        },
      ],
      credits: {
        enabled: false,
      },
    };
  }

  private setDoughnutChartProps() {
    this.doughnutChartOptions = {
      title: {
        text: 'Doughnut chart with horizontal legend',
        align: 'center',
      },
      chart: {
        type: 'pie',
      },
      // TODO: explore legend
      legend: {
        enabled: true,
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          borderWidth: 3,
          borderColor: '#ffff',
          borderRadius: 5,
          dataLabels: {
            enabled: false, // labels on chart
            crop: false,
            distance: -70,
            // style: {
            //   fontWeight: 'bold',
            //   fontSize: '16px',
            // },
          },
          // startAngle: -90, // for half doughnut chart
          // endAngle: 90,  // for half doughnut chart
          // center: ['50%', '75%'],
          size: '100%',
          showInLegend: true, // labels at the bottom of the chart
        },
      },
      colors: [
        '#FFBD4B',
        '#FE575E',
        '#BD5AFA',
        '#4BA9FF',
        '#49CC8D',
        '#0078BC',
      ],
      series: [
        {
          type: 'pie',
          name: 'Dummy data',
          data: this.doughnutChartData,
          innerSize: '70%',
        },
      ],
      credits: {
        enabled: false,
      },
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
