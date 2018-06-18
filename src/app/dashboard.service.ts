import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'TenantId': '838' })
};

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private notificationsBaseUrl: string = 'http://localhost:58547';  

  constructor(private httpClient: HttpClient) {
  }

  getWelcome(): Observable<string> {
    return this.httpClient.get<string>(this.notificationsBaseUrl + '/api/Welcome', httpOptions);      
  }

  getNotifications(): Observable<any> {
    return this.httpClient.get<any>(this.notificationsBaseUrl + '/api/Notification', httpOptions);
  }
  
}
