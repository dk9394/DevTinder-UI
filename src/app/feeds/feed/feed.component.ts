import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input() feed!: IUser;
  @Output() onUserInteraction = new EventEmitter();

  ngOnInit(): void {}

  onInterested() {
    console.log('interested');
    this.onUserInteraction.emit();
  }

  onIgnore() {
    console.log('Ignored');
    this.onUserInteraction.emit();
  }
}
