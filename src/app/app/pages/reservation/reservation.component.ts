import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.css'
})
export class ReservationComponent implements OnInit {
  reservation = {
    nom: '',
    email: '',
    telephone: '',
    coursId: null,
    date: '',
    heure: '',
    participants: 1,
    commentaire: ''
  };

  selectedCours: any = null;
  isSubmitting = false;
  reservationSuccess = false;

  cours = [
    {
      id: 1,
      title: 'CrossFit Intensif',
      category: 'CrossFit',
      coach: 'Marc Dubois',
      places: 15,
      horaires: [
        { date: '2024-01-15', heure: '18:00', places: 5 },
        { date: '2024-01-17', heure: '19:00', places: 3 },
        { date: '2024-01-19', heure: '17:00', places: 8 }
      ]
    },
    {
      id: 2,
      title: 'Yoga Vinyasa',
      category: 'Yoga',
      coach: 'Sophie Martin',
      places: 20,
      horaires: [
        { date: '2024-01-16', heure: '09:00', places: 12 },
        { date: '2024-01-18', heure: '18:30', places: 8 },
        { date: '2024-01-20', heure: '10:00', places: 15 }
      ]
    },
    {
      id: 3,
      title: 'HIIT Training',
      category: 'Cardio',
      coach: 'Thomas Leroy',
      places: 12,
      horaires: [
        { date: '2024-01-15', heure: '19:00', places: 6 },
        { date: '2024-01-17', heure: '18:00', places: 4 },
        { date: '2024-01-19', heure: '19:30', places: 7 }
      ]
    }
  ];

  ngOnInit() {
    // Simuler la récupération de l'ID du cours depuis l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const coursId = urlParams.get('coursId');
    if (coursId) {
      const cours = this.cours.find(c => c.id === parseInt(coursId));
      if (cours) {
        this.selectCours(cours);
      }
    }
  }

  selectCours(cours: any) {
    this.selectedCours = cours;
    this.reservation.coursId = cours.id;
  }

  selectHoraire(horaire: any) {
    this.reservation.date = horaire.date;
    this.reservation.heure = horaire.heure;
  }

  submitReservation() {
    if (!this.selectedCours) {
      alert('Veuillez sélectionner un cours');
      return;
    }

    if (!this.reservation.date || !this.reservation.heure) {
      alert('Veuillez sélectionner une date et une heure');
      return;
    }

    if (!this.reservation.nom || !this.reservation.email) {
      alert('Veuillez remplir vos informations personnelles');
      return;
    }

    this.isSubmitting = true;

    // Simulation d'envoi
    setTimeout(() => {
      console.log('Réservation envoyée:', this.reservation);
      this.isSubmitting = false;
      this.reservationSuccess = true;
      
      // Réinitialiser le formulaire après 3 secondes
      setTimeout(() => {
        this.reservationSuccess = false;
        this.reservation = {
          nom: '',
          email: '',
          telephone: '',
          coursId: null,
          date: '',
          heure: '',
          participants: 1,
          commentaire: ''
        };
        this.selectedCours = null;
      }, 3000);
    }, 2000);
  }

  getHorairePlaces(horaire: any): string {
    if (horaire.places <= 0) return 'Complet';
    if (horaire.places < 5) return `${horaire.places} places restantes`;
    return 'Disponible';
  }

  getHoraireClass(horaire: any): string {
    if (horaire.places <= 0) return 'complet';
    if (horaire.places < 5) return 'bientot-complet';
    return 'disponible';
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  }
}