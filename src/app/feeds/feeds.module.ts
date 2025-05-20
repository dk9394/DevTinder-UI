import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedsRoutingModule } from './feeds-routing.module';
import { FeedsComponent } from './feeds.component';
import { FeedComponent } from './feed/feed.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FeedsComponent, FeedComponent],
  imports: [CommonModule, FeedsRoutingModule, SharedModule],
})
export class FeedsModule {}
