import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { PageSizePickerComponent } from './page-size-picker/page-size-picker.component';

@NgModule({
  declarations: [PageSizePickerComponent, SidebarComponent],
  imports: [
    CommonModule
  ]
})
export class NavigationModule { }
