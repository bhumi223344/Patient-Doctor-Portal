import { Component, OnInit, AfterViewInit, ViewChild, viewChild } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AddPatientComponent } from '../add-patient/add-patient.component';
import { PatientService } from '../services/patient.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { pipe } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, AddPatientComponent, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatSortModule, MatPaginator, MatSort, MatDatepickerModule, CommonModule, MatSnackBarModule],
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
    private _patientService: PatientService,
    private _dialogRef: MatDialogRef<AddPatientComponent>,
    private _coreService: CoreService


  ) {}

  ngOnInit(): void {
      this.getPatientList();
  }

  openAddPatientForm() {
    const dialogRef = this._dialog.open(AddPatientComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPatientList();
        }
      }
    })
  }

  getPatientList() {
    this._patientService.getPatientList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
          
      },
      error: console.log,
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deletePatient(id: number) {
    this._patientService.deletePatient(id).subscribe({
      next: (_res) => {
        
        this._coreService.openSnackBar('Student Deleted!', 'done')
        this.getPatientList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddPatientComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getPatientList();
        }
      }
    })
    
  }


}
