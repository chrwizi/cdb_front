import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { NavigationWrapperComponent } from './navigation-wrapper/navigation-wrapper.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';

@NgModule({
  declarations: [SidebarComponent, NavigationWrapperComponent, TopbarComponent],
  imports: [
    CommonModule,
    CustomMaterialModule
  ],
  exports: [
    SidebarComponent, NavigationWrapperComponent, TopbarComponent
  ]
})
export class NavigationModule { }
