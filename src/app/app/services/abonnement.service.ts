import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Abonnement {
  id: number;
  nom: string;
  description: string;
  prix: number;
  dureeMois: number;
  avantages: string[];
  popularite: boolean;
  couleur: string;
}

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {
  private apiUrl = 'http://localhost:8080/api/abonnements';

  constructor(private http: HttpClient) {}

  getAbonnements(): Observable<Abonnement[]> {
    return this.http.get<Abonnement[]>(this.apiUrl);
  }

  getAbonnementById(id: number): Observable<Abonnement> {
    return this.http.get<Abonnement>(`${this.apiUrl}/${id}`);
  }

  souscrireAbonnement(abonnementId: number, userId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/${abonnementId}/souscrire`, { userId });
  }
}