import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { matFormFieldAnimations, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { PatientService } from '../services/patient.service';
import { DialogRef } from '@angular/cdk/dialog';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { privateDecrypt } from 'crypto';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CoreService } from '../core/core.service';


@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, ReactiveFormsModule, MatDialogModule, CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatNativeDateModule, MatRadioModule, MatSelectModule, ReactiveFormsModule, MatSortModule, MatPaginatorModule, MatSnackBarModule ],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent implements OnInit{
  patientForm: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _patientService: PatientService,
    private _dialogRef: MatDialogRef<AddPatientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
    
  ) {
    this.patientForm = this._fb.group({
      fullName: '',
      age: '',
      email: '',
      dob: '',
      gender: '',
      allergies: '',
      contactNumber: '',
      emergencyContactName: '',
      medicalHistory: ''

    })
  }

  ngOnInit(): void {
      this.patientForm.patchValue(this.data);
  }
  onSubmit() {
    if (this.patientForm.valid) {
      if(this.data) {
        this._patientService.updatePatient(this.data.id, this.patientForm.value)
        .subscribe({
          next: (val: any) => {
            
            this._coreService.openSnackBar('Student Details updated!')
            this._dialogRef.close(true);
  
          },
          error: (err: any) => {
            console.error(err);
          }
        });

      }
      else {
      this._patientService.addPatient(this.patientForm.value).subscribe({
        next: (val: any) => {

          this._coreService.openSnackBar('Student Added Successfully!')
          this._dialogRef.close(true);

        },
        error: (err: any) => {
          console.error(err);
        }
      });
    }
    }
  }


}
