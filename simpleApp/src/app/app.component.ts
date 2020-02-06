import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public data = [
    { 
      data: [65, 59, 80, 81, 56, 55, 40, 81, 56, 55, 40, 99], 
      borderWidth : 1, 
      type : 'bar',
      backgroundColor: 'rgba(33, 150, 243 , 0.9)',
      borderColor: 'rgba(33, 150, 243 , 1)',
    },
    { 
      data: [81, 56, 55, 40, 65, 59, 80, 40, 65, 59, 99, 99 ],
      type : 'bar',
      backgroundColor: 'rgba( 243, 121, 0 , 0.9)',
      borderColor: 'rgba( 243, 121, 0 , 1)',
      borderWidth : 1
    },
  ];
}
