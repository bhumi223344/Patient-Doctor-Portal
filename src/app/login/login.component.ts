import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import { CommonModule } from '@angular/common';
import { PatientService } from '../services/patient.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule, MatSnackBarModule, MatDialogModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usernameFormControl = new FormControl('', [Validators.required])
  passwordFormControl = new FormControl('', [Validators.required])

  username: string = '';
  password: string = '';
  loginFailed: boolean = false ;

  constructor(
    private PatientService: PatientService,
    private router: Router

  ) {}
  
  onLogin() {

    this.router.navigate(['/portal']);
  }


  onSubmit() {
    this.PatientService.login(this.username, this.password).subscribe((isLoggedIn: any) => {
      if (isLoggedIn) {
        console.log('Login Successful');
        this.loginFailed = false;
       
      } else {
        console.log('Login Failed!!');
        this.loginFailed = true;
        
      }
    });
  }
}
  
