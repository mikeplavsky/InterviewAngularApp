import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data = { 
    data1: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,14,17,20,12,13,17,19,13, 0, 0, 0, 0, 0, 0],
    data2: [17,14,17,21,-3,-2,17,17,20,17, 0, 0, 0, 0, 0, 0, 0, 0,17,-2,-3,21,17,13] 
  };

}
