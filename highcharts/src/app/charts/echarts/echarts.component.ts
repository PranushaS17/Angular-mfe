import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-echarts',
  templateUrl: './echarts.component.html',
  styleUrls: ['./echarts.component.scss'],
})
export class EchartsComponent implements OnInit {
  private data = [
    { name: 'Booked', value: 948 },
    { name: 'At Origin Hub', value: 786 },
    { name: 'En Route To Destination', value: 627 },
    { name: 'At Destination Hub', value: 192 },
    { name: 'Delivery Scheduled', value: 469 },
    { name: 'Exception', value: 205 },
  ];
  private data2 = [
    { name: 'Expires in 30 days', value: 300, color: '#49CC8D' },
    { name: 'Expires in 10 days', value: 150, color: '#FA9D5A' },
    { name: 'Expires in 3 days', value: 35, color: '#FA5A5A' },
  ];

  public verticalLegendOptions: EChartsOption;
  public horizontalLegendOptions: EChartsOption;

  ngOnInit() {
    this.setVerticalLegendOptions();
    this.setChartOpt();
  }

  private setVerticalLegendOptions() {
    this.verticalLegendOptions = {
      tooltip: {
        trigger: 'item',
      },
      title: {
        text: 'Doughnut chart with vertical legend',
        left: 'center',
      },
      legend: {
        orient: 'vertical',
        left: 'center',
        bottom: 0, // Adjusted bottom position
        padding: [15, 20],
        itemGap: 14,
        itemWidth: 8,
        // itemHeight: 14,
        formatter: (name) => {
          const val = this.data.filter((item) => item.name == name)[0].value;
          return ` {label|${name}} {value|${val}}`;
        },
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
              width: 200,
            },
          },
        },
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
          data: this.data,
        },
      ],
    };
  }

  private setChartOpt() {
    this.horizontalLegendOptions = {
      tooltip: {
        trigger: 'item',
      },
      title: {
        text: '485\nTotal Quotes',
        left: 'center',
        top: 'center'
      },
      legend: {
        orient: 'horizontal',
        bottom: 125, // Adjusted bottom position
        padding: [20, 20],
        formatter: (name) => {
          const val = this.data2.filter((item) => item.name == name)[0].value;
          return `{label|${name}}
{value|${val}}
{marker|}`;
        },
        data: this.data2.map((item) => ({
          icon: 'none',
          name: item.name,
          textStyle: {
            rich: {
              value: {
                fontWeight: 'bolder',
                fontSize: 16,
                align: 'center',
                padding: [5, 0],
              },
              label: {
                fontSize: 14,
              },
              marker: {
                height: 8,
                width: 20,
                backgroundColor: item.color,
                align: 'center',
              },
            },
          },
        })),
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          top: 0,
          bottom: 0, // to prevent overlapping when there is a bottom vertical legend
          radius: ['30%', '55%'], // for doughnut chart
          center: ['50%', '55%'],
          avoidLabelOverlap: false,
          padAngle: 3, // for gap between slices
          startAngle: 180, // for half doughnut charts
          endAngle: 360, // for half doughnut charts
          itemStyle: {
            borderRadius: 5,
          },
          tooltip: {
            show: false,
          },
          label: {
            show: false,
            position: 'center',
            verticalAlign: 'top',
            width: 100,
            overflow: 'break',
          },
          emphasis: {
            label: {
              show: false,
              fontSize: 14,
              fontWeight: 'bold',
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
          data: this.data2,
        },
      ],
    };
  }
}
