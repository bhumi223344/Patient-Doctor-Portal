import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import { LoginComponent } from "./login/login.component";
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PortalComponent } from './portal/portal.component';
import { AddPatientComponent } from "./add-patient/add-patient.component";
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, LoginComponent, CommonModule, MatToolbarModule, PortalComponent, AddPatientComponent, MatSnackBarModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Patient-Portal';
  
}
