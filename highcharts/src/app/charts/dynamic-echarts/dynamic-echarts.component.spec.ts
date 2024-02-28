import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicEchartsComponent } from './dynamic-echarts.component';

describe('DynamicEchartsComponent', () => {
  let component: DynamicEchartsComponent;
  let fixture: ComponentFixture<DynamicEchartsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicEchartsComponent]
    });
    fixture = TestBed.createComponent(DynamicEchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
