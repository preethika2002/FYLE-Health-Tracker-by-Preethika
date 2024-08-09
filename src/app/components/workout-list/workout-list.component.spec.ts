import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule],
  template: `
    <mat-card>
      <mat-form-field>
        <input matInput placeholder="Search by Name" [(ngModel)]="searchName" (ngModelChange)="applyFilter()">
      </mat-form-field>
      <mat-form-field>
        <mat-select placeholder="Filter by Workout Type" [(ngModel)]="filterType" (ngModelChange)="applyFilter()">
          <mat-option *ngFor="let type of workoutTypes" [value]="type">{{ type }}</mat-option>
        </mat-select>
      </mat-form-field>
      <!-- Your table or list component goes here -->
    </mat-card>
  `,
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent {
  searchName: string = '';
  filterType: string = '';
  workoutTypes: string[] = ['Running', 'Cycling', 'Swimming', 'Yoga'];

  applyFilter() {
    // Logic to apply filters
  }
}
