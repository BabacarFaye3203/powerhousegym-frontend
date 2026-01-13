import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  
  quickLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/abonnements', label: 'Abonnements' },
    { path: '/cours', label: 'Cours' },
    { path: '/reservation', label: 'Réservation' },
    { path: '/contact', label: 'Contact' }
  ];
  
  services = [
    { label: 'Coaching personnel' },
    { label: 'Nutrition sportive' },
    { label: 'Massage sportif' },
    { label: 'Sauna & Hammam' },
    { label: 'Évaluation physique' }
  ];
  
  socialLinks = [
    { icon: 'bi bi-facebook', url: '#' },
    { icon: 'bi bi-instagram', url: '#' },
    { icon: 'bi bi-twitter', url: '#' },
    { icon: 'bi bi-youtube', url: '#' },
    { icon: 'bi bi-tiktok', url: '#' }
  ];
  
  legalLinks = [
    { label: 'Mentions légales' },
    { label: 'Politique de confidentialité' },
    { label: 'CGU' },
    { label: 'Cookies' }
  ];
}