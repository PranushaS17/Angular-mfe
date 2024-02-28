import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiDoughnutEchartComponent } from './semi-doughnut-echart.component';

describe('SemiDoughnutEchartComponent', () => {
  let component: SemiDoughnutEchartComponent;
  let fixture: ComponentFixture<SemiDoughnutEchartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SemiDoughnutEchartComponent]
    });
    fixture = TestBed.createComponent(SemiDoughnutEchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
