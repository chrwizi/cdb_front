import { MatSnackBar } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private snackBar: MatSnackBar
  ) { }

  success(message: string): void {
    console.debug(message);
    this.snackBar.open(message, null, {
      duration: 2000,
      panelClass: ['success-snackbar']
    });
  }

  error(message: string): void {
    console.error(message);
    this.snackBar.open(message, null, {
      duration: 2000,
      panelClass: ['error-snackbar']
    });
  }
}
