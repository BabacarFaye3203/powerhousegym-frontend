import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-abonnement-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './abonnement-card.component.html',
  styleUrl: './abonnement-card.component.css'
})
export class AbonnementCardComponent {
  @Input() title = '';
  @Input() price = '';
  @Input() period = 'mois';
  @Input() features: string[] = [];
  @Input() highlighted = false;
  @Input() ctaText = 'Choisir cet abonnement';
}