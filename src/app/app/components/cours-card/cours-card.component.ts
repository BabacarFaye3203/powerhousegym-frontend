import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cours-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="card h-100 border-0 shadow-sm cours-card">
      <!-- Image et badge -->
      <div class="position-relative">
        <img [src]="image" 
             [alt]="title" 
             class="card-img-top"
             style="height: 200px; object-fit: cover;">
        
        <!-- Badge catégorie -->
        <div class="position-absolute top-0 end-0 m-3">
          <span [ngClass]="badgeClass" class="badge rounded-pill py-2 px-3">
            {{category}}
          </span>
        </div>
        
        <!-- Badge niveau -->
        <div class="position-absolute top-0 start-0 m-3">
          <span class="badge bg-dark py-2 px-3">
            {{level}}
          </span>
        </div>
      </div>

      <!-- Contenu -->
      <div class="card-body p-4">
        <div class="d-flex justify-content-between align-items-start mb-3">
          <h5 class="card-title fw-bold mb-0">{{title}}</h5>
          <div class="text-end">
            <div class="h4 fw-bold text-primary mb-0">{{price}}€</div>
            <small class="text-muted">/séance</small>
          </div>
        </div>

        <!-- Coach -->
        <div class="d-flex align-items-center mb-3">
          <div class="avatar-sm rounded-circle bg-primary d-flex align-items-center justify-content-center me-2">
            <i class="bi bi-person-fill text-white"></i>
          </div>
          <div>
            <span class="fw-medium">Coach {{coach}}</span>
          </div>
        </div>

        <!-- Description -->
        <p class="card-text text-muted mb-4" [class.text-truncate]="truncate">
          {{description}}
        </p>

        <!-- Infos supplémentaires -->
        <div class="row g-2 mb-4">
          <div class="col-6">
            <div class="d-flex align-items-center">
              <i class="bi bi-clock text-primary me-2"></i>
              <small>{{duration}} min</small>
            </div>
          </div>
          <div class="col-6">
            <div class="d-flex align-items-center">
              <i class="bi bi-people text-primary me-2"></i>
              <small>{{places}} places</small>
            </div>
          </div>
        </div>

        <!-- Actions -->
        <div class="d-flex gap-2">
          <button class="btn btn-primary flex-fill" [routerLink]="['/reservation']" 
                  [queryParams]="{coursId: id}">
            <i class="bi bi-calendar-plus me-2"></i>
            Réserver
          </button>
          <button class="btn btn-outline-primary" (click)="onDetails.emit()">
            <i class="bi bi-info-circle"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .cours-card {
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2) !important;
      }
    }
    
    .avatar-sm {
      width: 32px;
      height: 32px;
    }
  `]
})
export class CoursCardComponent {
  @Input() id: number = 0;
  @Input() title = '';
  @Input() category = '';
  @Input() level = '';
  @Input() description = '';
  @Input() coach = '';
  @Input() image = '';
  @Input() price: number | string = 0;
  @Input() duration = 60;
  @Input() places = 0;
  @Input() truncate = true;
  @Input() badgeClass = 'bg-primary';

  @Input() onDetails: any;
}