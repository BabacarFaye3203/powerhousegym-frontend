import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-reservation-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="modal-header border-0">
      <h4 class="modal-title fw-bold">Réserver ce cours</h4>
      <button type="button" class="btn-close" (click)="activeModal.dismiss()"></button>
    </div>
    
    <div class="modal-body">
      <!-- Informations du cours -->
      <div class="card bg-light border-0 mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-8">
              <h5 class="fw-bold">{{cours?.nom}}</h5>
              <p class="text-muted mb-1">
                <i class="bi bi-person-fill me-2"></i>
                Coach: {{cours?.coach}}
              </p>
              <p class="text-muted mb-0">
                <i class="bi bi-calendar-check me-2"></i>
                {{cours?.date | date:'EEEE dd MMMM yyyy'}}
              </p>
            </div>
            <div class="col-4 text-end">
              <div class="display-6 fw-bold text-primary">{{cours?.heure}}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Formulaire -->
      <form #reservationForm="ngForm" (ngSubmit)="submitReservation()">
        <div class="mb-3">
          <label class="form-label fw-semibold">Nom complet</label>
          <input type="text" 
                 class="form-control" 
                 [(ngModel)]="reservation.nom" 
                 name="nom"
                 required>
        </div>

        <div class="row mb-3">
          <div class="col-md-6">
            <label class="form-label fw-semibold">Email</label>
            <input type="email" 
                   class="form-control" 
                   [(ngModel)]="reservation.email" 
                   name="email"
                   required>
          </div>
          <div class="col-md-6">
            <label class="form-label fw-semibold">Téléphone</label>
            <input type="tel" 
                   class="form-control" 
                   [(ngModel)]="reservation.telephone" 
                   name="telephone"
                   required>
          </div>
        </div>

        <div class="mb-4">
          <label class="form-label fw-semibold">Commentaires (optionnel)</label>
          <textarea class="form-control" 
                    rows="3"
                    [(ngModel)]="reservation.commentaire" 
                    name="commentaire"
                    placeholder="Informations supplémentaires..."></textarea>
        </div>

        <!-- Récapitulatif -->
        <div class="alert alert-info">
          <div class="d-flex justify-content-between mb-2">
            <span>Cours:</span>
            <span class="fw-bold">{{cours?.nom}}</span>
          </div>
          <div class="d-flex justify-content-between mb-2">
            <span>Date et heure:</span>
            <span class="fw-bold">{{cours?.date | date:'dd/MM/yy'}} à {{cours?.heure}}</span>
          </div>
          <div class="d-flex justify-content-between">
            <span>Places disponibles:</span>
            <span class="fw-bold text-primary">{{cours?.placesRestantes}}</span>
          </div>
        </div>

        <div class="modal-footer border-0 pt-0">
          <button type="button" 
                  class="btn btn-outline-secondary" 
                  (click)="activeModal.dismiss()">
            Annuler
          </button>
          <button type="submit" 
                  class="btn btn-primary px-4"
                  [disabled]="!reservationForm.valid || isSubmitting">
            <span *ngIf="!isSubmitting">
              <i class="bi bi-check-circle me-2"></i>
              Confirmer la réservation
            </span>
            <span *ngIf="isSubmitting">
              <span class="spinner-border spinner-border-sm me-2"></span>
              Réservation en cours...
            </span>
          </button>
        </div>
      </form>
    </div>
  `
})
export class ReservationModalComponent {
  @Input() cours: any;
  
  reservation = {
    nom: '',
    email: '',
    telephone: '',
    commentaire: ''
  };

  isSubmitting = false;

  constructor(public activeModal: NgbActiveModal) {}

  submitReservation() {
    this.isSubmitting = true;
    
    // Simuler un appel API
    setTimeout(() => {
      this.isSubmitting = false;
      this.activeModal.close('reserved');
    }, 1500);
  }
}