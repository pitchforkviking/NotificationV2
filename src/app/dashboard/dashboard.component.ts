import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DashboardService } from '../dashboard.service';
import { Notification } from '../notification';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public currentJustify: any = 'fill';
  public welcome: string = 'hello';

  public notifications: any;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getNotifications().subscribe(notifications => { this.notifications = notifications; console.log(notifications); });    
  }

}
