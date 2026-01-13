import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AbonnementCardComponent } from '../../components/abonnement-card/abonnement-card.component';

@Component({
  selector: 'app-abonnements',
  standalone: true,
  imports: [CommonModule, RouterModule, AbonnementCardComponent],
  templateUrl: './abonnements.component.html',
  styleUrl: './abonnements.component.css'
})
export class AbonnementsComponent {
categories = [
  {
    name: '1 mois',
    description: 'Abonnements disponibles pour 1 mois',
    abonnements: [
      { title: 'Musculation', price: '200', period: '4 séances', features: ['Accès salle', 'Équipements complets'], highlighted: false, ctaText: 'Choisir' },
      { title: 'Musculation + Kick-boxing', price: '300', period: '1 mois', features: ['Musculation', 'Kick-boxing'], highlighted: false, ctaText: 'Choisir' },
      { title: 'Musculation + Taekwondo', price: '300', period: '1 mois', features: ['Musculation', 'Taekwondo'], highlighted: false, ctaText: 'Choisir' },
      { title: 'Musculation + Aérobic', price: '300', period: '1 mois', features: ['Musculation', 'Aérobic'], highlighted: false, ctaText: 'Choisir' }
    ]
  },
  {
    name: '3 mois',
    description: 'Abonnements disponibles pour 3 mois',
    abonnements: [
      { title: 'Musculation', price: '500', period: '3 mois', features: ['Accès illimité', 'Salle + vestiaires'], highlighted: true, ctaText: 'Le plus choisi' },
      { title: 'Musculation + Kick-boxing', price: '800', period: '3 mois', features: ['Musculation', 'Kick-boxing'], highlighted: false, ctaText: 'Choisir' },
      { title: 'Musculation + Taekwondo', price: '800', period: '3 mois', features: ['Musculation', 'Taekwondo'], highlighted: false, ctaText: 'Choisir' },
      { title: 'Musculation + Aérobic', price: '800', period: '3 mois', features: ['Musculation', 'Aérobic'], highlighted: false, ctaText: 'Choisir' }
    ]
  },
  {
    name: '6 mois',
    description: 'Abonnements disponibles pour 6 mois',
    abonnements: [
      { title: 'Musculation', price: '950', period: '6 mois', features: ['Accès illimité', 'Salle + vestiaires'], highlighted: false, ctaText: 'Choisir' },
      { title: 'Musculation + Kick-boxing', price: '1500', period: '6 mois', features: ['Musculation', 'Kick-boxing'], highlighted: false, ctaText: 'Choisir' },
      { title: 'Musculation + Taekwondo', price: '1500', period: '6 mois', features: ['Musculation', 'Taekwondo'], highlighted: false, ctaText: 'Choisir' },
      { title: 'Musculation + Aérobic', price: '1500', period: '6 mois', features: ['Musculation', 'Aérobic'], highlighted: false, ctaText: 'Choisir' }
    ]
  },
  {
    name: '1 an',
    description: 'Abonnements disponibles pour 1 an',
    abonnements: [
      { title: 'Musculation', price: '1600', period: '1 an', features: ['Accès illimité', 'Salle + vestiaires'], highlighted: false, ctaText: 'Choisir' },
      { title: 'Musculation + Kick-boxing', price: '3000', period: '1 an', features: ['Musculation', 'Kick-boxing'], highlighted: false, ctaText: 'Choisir' },
      { title: 'Musculation + Taekwondo', price: '3000', period: '1 an', features: ['Musculation', 'Taekwondo'], highlighted: false, ctaText: 'Choisir' },
      { title: 'Musculation + Aérobic', price: '3000', period: '1 an', features: ['Musculation', 'Aérobic'], highlighted: false, ctaText: 'Choisir' }
    ]
  }
];

 comparatifFeatures = [
    { name: 'Accès salle', key: 'Accès salle' },
    { name: 'Équipements complets', key: 'Équipements complets' },
    { name: 'Accès illimité', key: 'Accès illimité' },
    { name: 'Coach personnel', key: 'Coach personnel' }
  ];

  // Fonction pour savoir si un abonnement possède une fonctionnalité
  hasFeature(abonnement: any, feature: string): boolean {
    return abonnement.features.includes(feature);
  }
  avantages = [
    {
      icon: 'bi bi-calendar-check',
      title: 'Sans engagement',
      description: 'Annulez à tout moment sans frais'
    },
    {
      icon: 'bi bi-arrow-repeat',
      title: 'Pause flexible',
      description: 'Mettez votre abonnement en pause quand vous voulez'
    },
    {
      icon: 'bi bi-people',
      title: 'Accès invité',
      description: 'Faites découvrir PowerGym à vos proches'
    },
    {
      icon: 'bi bi-gift',
      title: 'Avantages exclusifs',
      description: 'Réductions chez nos partenaires'
    }
  ];

  faqs = [
    {
      question: 'Puis-je changer d\'abonnement ?',
      answer: 'Oui, vous pouvez changer d\'abonnement à tout moment. La modification prend effet au début du mois suivant.'
    },
    {
      question: 'Y a-t-il des frais d\'inscription ?',
      answer: 'Non, aucun frais d\'inscription. Vous payez seulement votre premier mois d\'abonnement.'
    },
    {
      question: 'Comment annuler mon abonnement ?',
      answer: 'Vous pouvez annuler directement depuis votre espace membre, sans justification.'
    },
    {
      question: 'Puis-je essayer avant de m\'inscrire ?',
      answer: 'Oui, nous offrons une séance d\'essai gratuite à tous les nouveaux membres.'
    }
  ];
}