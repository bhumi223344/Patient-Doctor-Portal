import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AddPatientComponent } from '../add-patient/add-patient.component';

@Component({
  selector: 'app-portal',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, AddPatientComponent],
  templateUrl: './portal.component.html',
  styleUrl: './portal.component.css'
})
export class PortalComponent {

  constructor(private _dialog: MatDialog) {}

  openAddPatientForm() {
    this._dialog.open(AddPatientComponent);

  }


}
