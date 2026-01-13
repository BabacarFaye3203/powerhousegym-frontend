import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AbonnementCardComponent } from '../../components/abonnement-card/abonnement-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, AbonnementCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Abonnements Musculation seule
  abonnementsMusculation = [
    { 
      title: '4 Séances', 
      price: '200', 
      period: 'DH', 
      features: ['Accès à toute la salle', 'Équipements premium', 'Horaires flexibles'], 
      highlighted: false, 
      ctaText: 'Choisir' 
    },
    { 
      title: '6 Séances', 
      price: '250', 
      period: 'DH', 
      features: ['Accès à toute la salle', 'Équipements premium', 'Horaires flexibles', 'Conseils coach'], 
      highlighted: true, 
      ctaText: 'Choisir' 
    },
    { 
      title: '3 Mois', 
      price: '500', 
      period: 'DH', 
      features: ['Accès illimité', 'Tous équipements', 'Support coach', 'Évaluation gratuite'], 
      highlighted: false, 
      ctaText: 'Choisir' 
    },
    { 
      title: '6 Mois', 
      price: '950', 
      period: 'DH', 
      features: ['Accès illimité', 'Tous équipements', 'Programme personnalisé', '1 massage offert'], 
      highlighted: false, 
      ctaText: 'Choisir' 
    },
    { 
      title: '1 An', 
      price: '1600', 
      period: 'DH', 
      features: ['Accès illimité', 'Tous équipements', 'Programme évolutif', '2 massages offerts', '-20% sur les boissons'], 
      highlighted: false, 
      ctaText: 'Choisir' 
    }
  ];

  features = [
    {
      icon: 'bi bi-cpu-fill',
      title: 'Équipements Technogym',
      description: 'Machines de dernière génération pour des résultats optimaux et un suivi précis'
    },
    {
      icon: 'bi bi-person-badge-fill',
      title: 'Coach Diplômés d\'État',
      description: 'Encadrement professionnel avec suivi personnalisé et programmes adaptés'
    },
    {
      icon: 'bi bi-phone-fill',
      title: 'Réservation Mobile',
      description: 'Application dédiée pour réserver vos cours et suivre votre progression'
    },
    {
      icon: 'bi bi-shield-check',
      title: 'Sécurité Maximale',
      description: 'Environnement sécurisé avec matériel vérifié quotidiennement'
    },
    {
      icon: 'bi bi-people-fill',
      title: 'Communauté Active',
      description: 'Groupe WhatsApp, événements mensuels et challenges motivants'
    },
    {
      icon: 'bi bi-droplet-fill',
      title: 'Espace Détente',
      description: 'Vestiaires premium, douches, et zone détente après l\'effort'
    }
  ];
}