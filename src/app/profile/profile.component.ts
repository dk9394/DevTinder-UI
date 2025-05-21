import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { IProfile } from '../models/user.model';
import { AppState } from '../store/app.state';
import { addProfile } from '../store/profile/profile.actions';
import { selectMyProfile } from '../store/profile/profile.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  profile: IProfile | null = null;
  isEditMode: boolean = false;
  oldProfile: IProfile | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(addProfile());
    this.store.select(selectMyProfile).subscribe((profile: IProfile | null) => {
      this.profile = profile;
      this.oldProfile = { ...profile } as IProfile;
    });
  }

  onEdit() {
    this.isEditMode = !this.isEditMode;

    if (!this.isEditMode) {
      this.profile = this.oldProfile;
    }
  }

  onProfileUpdate(newProfile: IProfile): void {
    this.profile = newProfile;
  }
}
