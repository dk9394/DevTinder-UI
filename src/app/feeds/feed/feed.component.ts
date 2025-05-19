import { Component, Input } from '@angular/core';

import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent {
  @Input() feed!: IUser;
}
