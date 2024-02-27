import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent implements OnInit {
  public doughnutChartOptions: EChartsOption;
  ngOnInit() {
    this.setDoughnutChartOptions();
  }

  private setDoughnutChartOptions() {
    this.doughnutChartOptions = {
      tooltip: {
        trigger: 'item',
      },
      title: {
        text: 'Doughnut chart with vertical legend',
        left: 'center',
      },
      legend: {
        orient: 'vertical',
        // bottom: 'left',
        left: 'center',
        bottom: 0, // Adjusted bottom position
        padding: [10, 20],
      },
      grid: {
        // containLabel: true
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          top: 0,
          bottom: 100, // to prevent overlapping when there is a bottom vertical legend
          radius: ['30%', '55%'], // for doughnut chart
          avoidLabelOverlap: false,
          padAngle: 3, // for gap between slices
          itemStyle: {
            borderRadius: 5,
          },
          tooltip: {
            show: false,
          },
          label: {
            show: false,
            position: 'center',
            verticalAlign: 'middle',
            width: 100,
            overflow: 'break',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 14,
              fontWeight: 'bold',
              formatter: (val) =>
                `{primary|${val.value}}\n
{secondary|${val.name}}`,
              // formatter: (item) => {
              //   return '{primary|}'+item.value+'{secondary|}'+item.name
              // },
              rich: {
                primary: {
                  fontSize: 16,
                  fontWeight: 'bolder',
                  padding: 8,
                },
                secondary: {
                  fontSize: 14,
                  color: 'darkgray',
                  fontWeight: 'bolder',
                },
              },
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { name: 'Booked', value: 948 },
            { name: 'At Origin Hub', value: 786 },
            { name: 'En Route To Destination', value: 627 },
            { name: 'At Destination Hub', value: 192 },
            { name: 'Delivery Scheduled', value: 469 },
            { name: 'Exception', value: 205 },
          ],
        },
      ],
    };
  }
}
