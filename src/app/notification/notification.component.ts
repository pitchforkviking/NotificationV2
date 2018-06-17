import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NotificationService } from '../notification.service'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  public currentJustify: any = 'fill';

  public notificationKinds: any = ['Push', 'In-App', 'Both'];
  public notificationTypes: any = ['Poll', 'Forum', 'Quiz', 'Badge', 'Reward', 'Custom'];

  public notification: any = {
    Kind: 'In-App',
    Type: 'Poll',
    TargetUser: 10624,
    Title: 'Title',
    Description: 'Description'
  }

  constructor(public notificationService: NotificationService) { }

  ngOnInit() {
    console.log(this.notification.Type);
  }

  public broadcast(): void {
    console.log(this.notification);
    this.notificationService.postNotifications(this.notification).subscribe(response => console.log(response));
  }

  public multicast(): void {
    console.log(this.notification);
    this.notificationService.postNotifications(this.notification).subscribe(response => console.log(response));
  }

  public unicast(): void {
    console.log(this.notification);
    this.notificationService.postNotifications(this.notification).subscribe(response => console.log(response));
  } 
}
