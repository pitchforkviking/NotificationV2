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

  public getPolls(): Observable<any> {
    return this.httpClient.get<any>(this.notificationsBaseUrl + '/api/Platform?filter=Poll', httpOptions);
  }

  public getForums(): Observable<any> {
    return this.httpClient.get<any>(this.notificationsBaseUrl + '/api/Platform?filter=Forum', httpOptions);
  }

  public getTopics(): Observable<any> {
    return this.httpClient.get<any>(this.notificationsBaseUrl + '/api/Platform?filter=Topic', httpOptions);
  }

  public getBadges(): Observable<any> {
    return this.httpClient.get<any>(this.notificationsBaseUrl + '/api/Platform?filter=Badge', httpOptions);
  }

  public getRewards(): Observable<any> {
    return this.httpClient.get<any>(this.notificationsBaseUrl + '/api/Platform?filter=Reward', httpOptions);
  }

  public getUsers(): Observable<any> {
    return this.httpClient.get<any>(this.notificationsBaseUrl + '/api/Platform?filter=User', httpOptions);
  }

  public getGroups(): Observable<any> {
    return this.httpClient.get<any>(this.notificationsBaseUrl + '/api/Platform?filter=Group', httpOptions);
  }
}
