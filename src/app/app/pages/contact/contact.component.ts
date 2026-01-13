import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  email = 'power.house61@gmail.com';

  contact = {
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
    newsletter: false
  };

  sujets = [
    'Informations générales',
    'Abonnements',
    'Cours et réservations',
    'Problème technique',
    'Partenariat',
    'Autre'
  ];

  isSubmitting = false;
  showSuccess = false;

  horaires = [
    { jour: 'Lundi - Vendredi', heures: '06h - 23h' },
    { jour: 'Samedi', heures: '08h - 22h' },
    { jour: 'Dimanche', heures: '09h - 20h' },
    { jour: 'Abonnés Premium', heures: '24h/24 7j/7' }
  ];

  contacts = [
    { icon: 'bi bi-geo-alt', text: 'شارع الجيش الملكي، حي الضحى, Beni Mellal, Maroc' },
    { icon: 'bi bi-telephone', text: '06 51 97 49 63' },
    { icon: 'bi bi-instagram', text: 'Power.House61' },
    { icon: 'bi bi-envelope', text: 'power.house61@gmail.com' }
  ];

  submitContact() {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;

    setTimeout(() => {
      console.log('Message envoyé:', this.contact);
      this.isSubmitting = false;
      this.showSuccess = true;

      this.contact = {
        nom: '',
        email: '',
        telephone: '',
        sujet: '',
        message: '',
        newsletter: false
      };

      setTimeout(() => this.showSuccess = false, 5000);
    }, 2000);
  }
}
