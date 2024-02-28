import { Component, Input, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-doughnut-echart',
  templateUrl: './doughnut-echart.component.html',
  styleUrls: ['./doughnut-echart.component.scss'],
})
export class DoughnutEchartComponent implements OnInit {
  @Input() config: any;

  public options: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'center',
      bottom: 0, // Adjusted bottom position
      padding: [15, 20],
      itemGap: 14,
      itemWidth: 8,
      icon: 'rect',
      textStyle: {
        rich: {
          value: {
            fontWeight: 'bolder',
            fontSize: 16,
            align: 'right',
          },
          label: {
            fontSize: 14,
            width: 180,
          },
        },
      },
    },
    series: [
      {
        type: 'pie',
        top: '-20%',
        left: '-20%',
        right: '-20%',
        bottom: 130, // to prevent overlapping when there is a bottom vertical legend
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
      },
    ],
  };

  ngOnInit() {
    const series = [
      {
        // @ts-ignore
        ...this.options.series[0],
        data: this.config.data,
        color: this.config.data.map((item: any) => item.color),
      },
    ];
    this.options.series = series;
    this.options.legend = {
      ...this.options.legend,
      formatter: (name) => {
        const val = this.config.data.filter((item: any) => item.name == name)[0]
          .value;
        return ` {label|${name}} {value|${val}}`;
      },
    };
  }
}
