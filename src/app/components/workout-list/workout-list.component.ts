import { Component } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { WorkoutData } from './workout-data.model'; // Ensure this path is correct

@Component({
  selector: 'app-workout-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    CdkTableModule
  ],
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css']
})
export class WorkoutListComponent {
  dataSource: WorkoutData[] = [
    { name: 'John Doe', type: 'Running', minutes: 30 },
    { name: 'Jane Smith', type: 'Cycling', minutes: 45 },
    { name: 'Mike Johnson', type: 'Yoga', minutes: 50 }
  ];
}
