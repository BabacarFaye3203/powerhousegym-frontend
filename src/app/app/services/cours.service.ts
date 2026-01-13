import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cours {
  id: number;
  nom: string;
  type: string;
  niveau: string;
  description: string;
  coach: string;
  date: Date;
  heure: string;
  placesRestantes: number;
  duree: number;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private apiUrl = 'http://localhost:8080/api/cours';

  constructor(private http: HttpClient) {}

  getCours(): Observable<Cours[]> {
    return this.http.get<Cours[]>(this.apiUrl);
  }

  getCoursById(id: number): Observable<Cours> {
    return this.http.get<Cours>(`${this.apiUrl}/${id}`);
  }

  reserverCours(coursId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${coursId}/reserver`, { userId });
  }
}