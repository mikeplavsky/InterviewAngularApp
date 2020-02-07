import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { DataSource } from 'src/app/components/chart/chart.component';

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
