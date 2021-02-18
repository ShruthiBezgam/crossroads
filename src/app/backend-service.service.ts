import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }
  /**
   * calling backend git Commit History service
   */
  gitCommitHistoryService(){
    console.log('Calling Authentication service ');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',    
      }),
    };
    return this.http.get(
      environment.Endpoint,
      httpOptions,
    );
  }
}
