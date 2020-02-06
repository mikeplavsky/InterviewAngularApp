import { Component, Input } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

export interface DataSource {
  account1: number[];
  account2: number[];
}

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  @Input()
  set data(ds: DataSource) {

    this.chartData = [{
        data: ds.account1,
        backgroundColor: 'rgb(113, 72, 237)',
        ...this.dataRowConfig
      }, {
        data: ds.account2,
        backgroundColor: 'rgba(180, 180, 200, 0.1)',
        ...this.dataRowConfig
      }
    ]

    this.chartLabels = new Array(ds.account1.length); 
  }

  chartData: ChartDataSets[];
  chartLabels: Label[] = [];
  
  chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    tooltips: { enabled: false },
    scales: {
      xAxes: [ {
        display: false,
        stacked: true
      }],
      yAxes: [ { 
        display: false,
        stacked: true
      }]
    }
  };

  dataRowConfig = {
    borderWidth: 0, 
    type: 'bar',
    barPercentage: 0.85
  }
}
