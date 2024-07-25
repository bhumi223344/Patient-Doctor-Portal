import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {merge} from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, CommonModule],
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
  
  onSubmit() {
    if (this.username === 'Bhumi' && this.password === 'Bhumi123') {
      this.loginFailed = false;
    }

    else{
      this.loginFailed = true;
      console.log("login failed");
    }

  }
}