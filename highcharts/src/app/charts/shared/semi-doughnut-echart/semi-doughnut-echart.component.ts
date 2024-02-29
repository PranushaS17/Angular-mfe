import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'app-semi-doughnut-echart',
  templateUrl: './semi-doughnut-echart.component.html',
  styleUrls: ['./semi-doughnut-echart.component.scss'],
})
export class SemiDoughnutEchartComponent implements OnInit, AfterViewInit {
  @Input() config: any;
  @ViewChild('echart') chart: ElementRef;

  public options: EChartsOption = {
    tooltip: {
      trigger: 'item',
    },
    title: {
      // text: '485\nTotal Quotes',
      left: 'center',
      top: 'center',
      // bottom: 85,
      textStyle: {
        fontSize: 14,
      },
    },
    legend: {
      orient: 'horizontal',
      bottom: 0, // Adjusted bottom position
      padding: [0, -180],
      itemWidth: 10,
      itemGap: 10,
    },
    series: [
      {
        type: 'pie',
        top: '-75%',
        left: '-75%',
        right: '-75%',
        // bottom: 100, // to prevent overlapping when there is a bottom vertical legend
        radius: ['30%', '55%'], // for doughnut chart
        center: ['50%', '75%'],
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
    this.options = {
      ...this.options,
      title: { ...this.options.title, text: this.config.text },
      series,
    };
  }

  ngAfterViewInit() {
    this.options.legend = {
      ...this.options.legend,
      formatter: (name) => {
        const val = this.config.data.filter((item: any) => item.name == name)[0]
          .value;
        return `{label|${name}}
{value|${val}}
{marker|}`;
      },
      data: this.config.data.map((item: any) => ({
        icon: 'none',
        name: item.name,
        textStyle: {
          rich: {
            value: {
              fontWeight: 'bolder',
              fontSize: 14,
              align: 'center',
              padding: [5, 0],
            },
            label: {
              fontSize: this.autoFontSize(),
              width: 10,
              align: 'center',
              overflow: 'break',
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
    };
  }

  private autoFontSize() {
    let width = this.chart.nativeElement.clientWidth;
    let newFontSize = 10;
    if (width > 400) {
      newFontSize = Math.round(width / 50);
    }
    console.log(
      `Current width : ${width}, Updating Fontsize to ${newFontSize}`
    );
    return newFontSize;
  }
}
