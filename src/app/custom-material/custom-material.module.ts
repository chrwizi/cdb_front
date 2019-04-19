import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';


import {MatDividerModule} from '@angular/material/divider'; 

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import { MatTableModule, MatPaginatorModule, MatButtonToggleModule, MatIconModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule
  ],
  exports:[
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule

  ]
})
export class CustomMaterialModule {  }
