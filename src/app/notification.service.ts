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
export class NotificationService {

  private notificationsBaseUrl: string = 'http://localhost:58547';

  constructor(private httpClient: HttpClient) {
  }

  public postNotifications(notification: any): Observable<any> {
    return this.httpClient.post<any>(this.notificationsBaseUrl + '/api/Notification', notification, httpOptions);
  }
}
