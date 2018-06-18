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

  public kinds: any = ['Push', 'In-App', 'Both'];
  public types: any = ['Poll', 'Forum', 'Topic', 'Badge', 'Reward', 'Custom'];

  public topics: any;
  public polls: any;
  public forums: any;

  public users: any;
  public groups: any;

  public badges: any;
  public rewards: any;

  public notification: any = {
    Kind: 'In-App',
    Type: 'Poll',
    TargetUser: 0,
    TargetGroup: 0,
    PollId: 0,
    TopicId: 0,
    ForumId: 0,
    BadgeId: 0,
    RewardId: 0,
    Title: 'Title',
    Description: 'Description'
  }

  constructor(public notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getPolls().subscribe(response => { this.polls = response; console.log(response); });
    this.notificationService.getForums().subscribe(response => { this.forums = response; console.log(response); });
    this.notificationService.getTopics().subscribe(response => { this.topics = response; console.log(response); });
    this.notificationService.getRewards().subscribe(response => { this.rewards = response; console.log(response); });
    this.notificationService.getBadges().subscribe(response => { this.badges = response; console.log(response); });
    this.notificationService.getUsers().subscribe(response => { this.users = response; console.log(response); });
    this.notificationService.getGroups().subscribe(response => { this.groups = response; console.log(response); });
  }

  public broadcast(): void {
    console.log(this.notification);
    //this.notificationService.postNotifications(this.notification).subscribe(response => console.log(response));
  }

  public multicast(): void {
    console.log(this.notification);
    //this.notificationService.postNotifications(this.notification).subscribe(response => console.log(response));
  }

  public unicast(): void {
    console.log(this.notification);
    //this.notificationService.postNotifications(this.notification).subscribe(response => console.log(response));
  } 
}
