import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { PageSizePickerComponent } from './page-size-picker/page-size-picker.component';
import { NavigationWrapperComponent } from './navigation-wrapper/navigation-wrapper.component';

@NgModule({
  declarations: [SidebarComponent, PageSizePickerComponent, NavigationWrapperComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent, PageSizePickerComponent
  ]
})
export class NavigationModule { }
