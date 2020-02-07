import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  public $accountsStatistics() {
    
    return forkJoin(
      this.http.get('./assets/account1.json'),
      this.http.get('./assets/account2.json')
    )
    .pipe( 
      map( (res:any) => {
        return {
          account1: res[0].response,
          account2: res[1].activity.map( x => x.data )
        }
      })
    )
  }
}
