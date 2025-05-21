import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  @Input() user!: IUser | null;
  @Input() userActions: boolean = false;
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
