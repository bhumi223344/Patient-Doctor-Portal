import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private UserUrl = 'http://localhost:3000/User';
  
  constructor(private http: HttpClient) {}

  addPatient(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/Patients', data);
  }

  updatePatient(id: number,data: any): Observable<any> {
    return this.http.post(`http://localhost:3000/Patients/${id}`, data);
  }

  getPatientList(): Observable<any> {
    return this.http.get('http://localhost:3000/Patients');
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/students/${id}`)
    
  } 

  login(username: string, password: string): Observable<boolean> {
    return this.http.get<any[]>(this.UserUrl).pipe(
      map(User => {
        const user = User.find(u => u.username === username && u.password === password);
        return user;
      }),
      catchError(() => of(false))
    );
  }

  
}
