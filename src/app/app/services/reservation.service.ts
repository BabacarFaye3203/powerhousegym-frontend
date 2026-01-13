import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Reservation {
  id: number;
  utilisateurId: number;
  coursId: number;
  dateReservation: Date;
  statut: 'CONFIRMEE' | 'ANNULEE' | 'TERMINEE';
  prixPaye: number;
  commentaire?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'http://localhost:8080/api/reservations';

  constructor(private http: HttpClient) {}

  getReservationsUtilisateur(userId: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/utilisateur/${userId}`);
  }

  creerReservation(reservation: Partial<Reservation>): Observable<Reservation> {
    return this.http.post<Reservation>(this.apiUrl, reservation);
  }

  annulerReservation(reservationId: number): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${reservationId}/annuler`, {});
  }
}