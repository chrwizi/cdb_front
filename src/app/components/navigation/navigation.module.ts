import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationWrapperComponent } from './navigation-wrapper/navigation-wrapper.component';
import { TopbarComponent } from './topbar/topbar.component';

@NgModule({
  declarations: [SidebarComponent, NavigationWrapperComponent, TopbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent, NavigationWrapperComponent, TopbarComponent
  ]
})
export class NavigationModule { }
