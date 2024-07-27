import { Component, OnInit, AfterViewInit, ViewChild, viewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { PatientService } from '../services/patient.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, AddPatientComponent, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatPaginator, MatSort],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})
export class PortalComponent implements OnInit {

  displayedColumns: string[] = [
    'id', 
    'fullName', 
    'age', 
    'email', 
    'dob', 
    'gender', 
    'allergies',
    'contactNumber',
    'emergencyContactName',
    'medicalHistory',
    'action',
   ];

   dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _patientService: PatientService
  
  ) {}

  ngOnInit(): void {
      this.getPatientList();
  }

  openAddPatientForm() {
    this._dialog.open(AddPatientComponent);

  }

  getPatientList() {
    this._patientService.getPatientList().subscribe({
      next: (res) => {
        console.log(res);

      },
      error: console.log,
      });
  }


}
