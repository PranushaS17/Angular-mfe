import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

export interface ObjectToQuery {
  keyPath: Array<string>;
  value: boolean | number | string;
}
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  // encapsulation: ViewEncapsulation.None,
})
export class FiltersComponent implements OnInit {
  public form: FormGroup;
  public statusGrp = [
    { name: 'shipped' },
    { name: 'delivered' },
    { name: 'ordered' },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.initForm();
    this.route.queryParams.subscribe((params: any) => {
      console.log('params from route', params);
      if (Object.keys(params).length) {
        this.setFormVal(params);
      }
    });
  }

  private setFormVal(data: any) {
    const decodedVal = Object.entries(data).reduce((acc, [key, val]: any) => {
      return {
        ...acc,
        [key]: val.includes('=')
          ? this.queryToObject(val)
          : val.includes('GMT')
          ? new Date(val)
          : val,
      };
    }, {});
    console.log('decoded params', decodedVal);
    this.form.patchValue(decodedVal);
  }

  private queryToObject(query: string | { [key: string]: string }) {
    const urlParams = new URLSearchParams(query);
    return Object.fromEntries((<any>urlParams).entries());
  }

  private objectToQuery(
    object: ObjectToQuery | { [key: string]: string }
  ): any {
    const data = this.objectToQueryHelper(object);
    return data
      .map(({ keyPath: [firstKey, ...otherKeys], value }) => {
        const nestedPath = otherKeys.map((key) => `[${key}]`).join('');
        return `${firstKey}${nestedPath}=${value ? encodeURI(`${value}`) : ''}`;
      })
      .join('&');
  }

  private objectToQueryHelper(
    object: ObjectToQuery | { [key: string]: string },
    path: Array<string> = [],
    result: Array<ObjectToQuery> = []
  ): Array<ObjectToQuery> {
    return Object.entries(object).reduce((acc: any, [key, value]) => {
      if (value) {
        if (this.isObject(value)) {
          acc.push(...this.objectToQueryHelper(value, [...path, key], result));
        } else {
          acc.push({ keyPath: [...path, key], value });
        }
      }
      return acc;
    }, []);
  }

  private isObject(val: any) {
    return (
      typeof val === 'object' &&
      !Array.isArray(val) &&
      val !== null &&
      !this.isDate(val)
    );
  }

  private isDate(val: any) {
    return val instanceof Date;
  }

  public submit() {
    const formValue = this.form.value;
    console.log('form val', this.form.value);

    const queryParams = Object.keys(formValue).reduce((acc, key) => {
      acc = this.isObject(formValue[key])
        ? { ...acc, [key]: this.objectToQuery(formValue[key]) }
        : this.isDate(formValue[key])
        ? { ...acc, [key]: new Date(formValue[key].toString()) }
        : { ...acc, [key]: formValue[key] };
      return acc;
    }, {});

    this.router.navigate([], {
      replaceUrl: true,
      queryParams,
      relativeTo: this.route,
    });
    console.log('query ', queryParams);
  }

  private initForm() {
    this.form = this.fb.group({
      contactNumber: [],
      orderType: [],
      orderStatusGroup: [],
      // orderStatus: ['ghjkl'],
      // originCity: [641658],
      // deliveryCity: [3456678],
      // accountNumber: ['1234567098765'],
      // agentId: [],
      pickUpFromDt: [],
      pickUpToDt: [],
      deliveryFromDt: [],
      deliveryToDt: [],
    });
  }
}
