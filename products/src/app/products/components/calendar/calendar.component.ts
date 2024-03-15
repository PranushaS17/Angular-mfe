import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent implements OnInit {
  private invalidDates = [0, 5, 6];

  public dateForm: FormGroup = new FormGroup({
    originDate: new FormControl(['']),
    destinationDt: new FormControl(['']),
  });
  public originDtConfig = [
    {
      dates: [6, 8],
      class: 'blue-highlight',
    },
    {
      dates: [27],
      class: 'bg-primary',
    },
    {
      dates: [13, 22],
      class: 'text-success fw-bold',
    },
  ];

  public destinationDtConfig = [
    {
      dates: [20, 22],
      class: 'green-highlight',
    },
    {
      dates: [26],
      class: 'green-bg',
    },
    {
      dates: [27, 28],
      class: 'text-success fw-bold',
    },
  ];

  ngOnInit() {
    this.findInvalidDates();
  }

  private findInvalidDates() {
    const date = new Date();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    const numDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let day = 1; day <= numDaysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      const dayOfWeek = date.getDay();

      // Check if the day is Monday (1), Saturday (6), or Sunday (0)
      if (dayOfWeek === 1 || dayOfWeek === 6 || dayOfWeek === 0) {
        this.invalidDates.push(day);
      }
    }
  }

  public getClassCondition(data: any, configs: any) {
    const configItem = configs.find(
      (config: any) =>
        !this.invalidDates.includes(data.day) &&
        data.day >= config.dates[0] &&
        (data.day <= config.dates[1]
          ? data.day <= config.dates[1]
          : data.day <= config.dates[0])
    );

    return configItem?.dates.length ? configItem.class : 'inherit';
  }
}
