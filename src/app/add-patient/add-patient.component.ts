import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { PatientService } from '../services/patient.service';
import { DialogRef } from '@angular/cdk/dialog';


@Component({
  selector: 'app-add-patient',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.css'
})
export class AddPatientComponent {
  patientForm: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _patientService: PatientService,
    private _dialogRef: DialogRef<AddPatientComponent>,
    
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
  onSubmit() {
    if (this.patientForm.valid) {
      this._patientService.addPatient(this.patientForm.value).subscribe({
        next: (val: any) => {
          alert('Patient Added successfully');
          this._dialogRef.close();

        },
        error: (err: any) => {
          console.error(err);
        }
      })
    }
  }


}
