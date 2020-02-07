import { Component, OnInit } from '@angular/core';
import { DataSource } from 'src/app/chart/chart.component';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements OnInit {

  $data: Observable<DataSource>;
  
  constructor(public ds: DataService) { }

  ngOnInit() {
    this.$data = this.ds.$accountsStatistics();
  }
}
