import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';

@NgModule({
  declarations: [ProfileComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class ProfileModule {}
