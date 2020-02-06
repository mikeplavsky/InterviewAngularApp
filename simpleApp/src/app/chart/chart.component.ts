import { Component, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent {

  @Input()
  public chartData: ChartDataSets[];

  public chartLabels: Label[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [ { 
        gridLines: { 
          display: false
        },
        stacked : true,
      } ],
      yAxes: [ { 
        gridLines: { 
          display: false 
        },
        stacked : true,
        display: false,
      }]
    }
  };

  public chartLegend = false;
  public chartType = 'bar';
}
