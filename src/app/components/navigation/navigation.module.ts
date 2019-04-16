import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { PageSizePickerComponent } from './page-size-picker/page-size-picker.component';
import { NavigationWrapperComponent } from './navigation-wrapper/navigation-wrapper.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [SidebarComponent, PageSizePickerComponent, NavigationWrapperComponent, TopbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent, PageSizePickerComponent, NavigationWrapperComponent, TopbarComponent
  ]
})
export class NavigationModule { }
