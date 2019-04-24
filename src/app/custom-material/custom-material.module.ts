import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider'; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input'; 
import { MatTableModule, MatPaginatorModule, MatButtonToggleModule, MatIconModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule, MatMenuTrigger, MatMenuModule} from '@angular/material';

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
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatMenuModule
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
    MatIconModule,
    ReactiveFormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatMenuModule

  ]
})
export class CustomMaterialModule {  }
