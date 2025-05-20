import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { FormDetailsContainerComponent } from './components/form-details-container/form-details-container.component';

@NgModule({
  declarations: [PlaceholderComponent, FormDetailsContainerComponent],
  imports: [CommonModule],
  exports: [PlaceholderComponent, FormDetailsContainerComponent],
})
export class SharedModule {}
