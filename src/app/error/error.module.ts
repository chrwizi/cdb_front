import { CustomMaterialModule } from 'src/app/custom-material/custom-material.module';
import { ErrorService } from './error.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ErrorService],
  imports: [
    CommonModule,
    CustomMaterialModule
  ]
})
export class ErrorModule { }
