import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private UserUrl = 'http://localhost:3000/User';
  
  constructor(private http: HttpClient) {}

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
