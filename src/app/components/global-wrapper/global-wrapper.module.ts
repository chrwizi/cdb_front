import { RouterModule } from '@angular/router';
import { GlobalWrapperComponent } from './global-wrapper/global-wrapper.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [GlobalWrapperComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    GlobalWrapperComponent
  ]
})
export class GlobalWrapperModule { }
