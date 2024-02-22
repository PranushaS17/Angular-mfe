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
        type: 'scroll'
      },
      grid: {
        // containLabel: true
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['30%', '60%'], // for doughnut chart
          avoidLabelOverlap: false,
          padAngle: 3, // for gap between slices
          itemStyle: {
            borderRadius: 5,
          },
          label: {
            show: false,
            position: 'center',
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 14,
              fontWeight: 'bold',
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
