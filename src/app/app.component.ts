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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, LoginComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Patient-Portal';
  
}
