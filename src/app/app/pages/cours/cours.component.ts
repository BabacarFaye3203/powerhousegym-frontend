import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cours',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './cours.component.html',
  styleUrl: './cours.component.css'
})
export class CoursComponent {
  selectedCategory = 'all';
  selectedLevel = 'all';
  selectedTime = 'all';

  categories = [
    { id: 'musculation', name: 'Musculation', icon: 'bi bi-activity' },
    { id: 'cardio', name: 'Cardio', icon: 'bi bi-heart-pulse' },
    { id: 'yoga', name: 'Yoga & Pilates', icon: 'bi bi-flower1' },
    { id: 'crossfit', name: 'CrossFit', icon: 'bi bi-lightning' },
    { id: 'danse', name: 'Danse', icon: 'bi bi-music-note-beamed' },
    { id: 'arts-martiaux', name: 'Arts Martiaux', icon: 'bi bi-shield-check' }
  ];

  niveaux = [
    { id: 'debutant', name: 'Débutant', color: '#4CAF50' },
    { id: 'intermediaire', name: 'Intermédiaire', color: '#2196F3' },
    { id: 'avance', name: 'Avancé', color: '#FF9800' },
    { id: 'tous', name: 'Tous niveaux', color: '#9C27B0' }
  ];

  cours = [
    {
      id: 1,
      title: 'CrossFit Intensif',
      category: 'crossfit',
      niveau: 'intermediaire',
      coach: 'Marc Dubois',
      image: '../../../../assets/musculation.jpg',
      description: 'Entraînement haute intensité combinant force, cardio et gymnastique',
      duree: 60,
      places: 15,
      horaires: [
        { jour: 'Lundi', heure: '18:00' },
        { jour: 'Mercredi', heure: '19:00' },
        { jour: 'Vendredi', heure: '17:00' }
      ]
    },
    {
      id: 2,
      title: 'Yoga Vinyasa',
      category: 'yoga',
      niveau: 'tous',
      coach: 'Sophie Martin',
      image: '../../../../assets/musculation.jpg',
      description: 'Enchaînements fluides de postures synchronisées avec la respiration',
      duree: 75,
      places: 20,
      horaires: [
        { jour: 'Mardi', heure: '09:00' },
        { jour: 'Jeudi', heure: '18:30' },
        { jour: 'Samedi', heure: '10:00' }
      ]
    },
    {
      id: 3,
      title: 'HIIT Training',
      category: 'cardio',
      niveau: 'avance',
      coach: 'Thomas Leroy',
      image: '../../../../assets/musculation.jpg',
      description: 'Entraînement par intervalles à haute intensité pour brûler les graisses',
      duree: 45,
      places: 12,
      horaires: [
        { jour: 'Lundi', heure: '19:00' },
        { jour: 'Mercredi', heure: '18:00' },
        { jour: 'Vendredi', heure: '19:30' }
      ]
    },
    {
      id: 4,
      title: 'Musculation Avancée',
      category: 'musculation',
      niveau: 'avance',
      coach: 'Alexandre Bernard',
      image: '../../../../assets/musculation.jpg',
      description: 'Programme complet de musculation avec techniques avancées',
      duree: 90,
      places: 8,
      horaires: [
        { jour: 'Mardi', heure: '17:00' },
        { jour: 'Jeudi', heure: '17:00' },
        { jour: 'Samedi', heure: '11:00' }
      ]
    },
    {
      id: 5,
      title: 'Zumba Fitness',
      category: 'danse',
      niveau: 'debutant',
      coach: 'Isabella Rodriguez',
      image: '../../../../assets/musculation.jpg',
      description: 'Cours de danse fitness sur des rythmes latinos énergiques',
      duree: 60,
      places: 25,
      horaires: [
        { jour: 'Lundi', heure: '20:00' },
        { jour: 'Mercredi', heure: '20:00' },
        { jour: 'Samedi', heure: '14:00' }
      ]
    },
    {
      id: 6,
      title: 'Boxe Anglaise',
      category: 'arts-martiaux',
      niveau: 'intermediaire',
      coach: 'Karim Ali',
      image: '../../../../assets/musculation.jpg',
      description: 'Techniques de boxe pour améliorer coordination et cardio',
      duree: 60,
      places: 12,
      horaires: [
        { jour: 'Mardi', heure: '19:00' },
        { jour: 'Jeudi', heure: '19:00' },
        { jour: 'Samedi', heure: '15:00' }
      ]
    }
  ];

  get filteredCours() {
    return this.cours.filter(cours => {
      const categoryMatch = this.selectedCategory === 'all' || cours.category === this.selectedCategory;
      const levelMatch = this.selectedLevel === 'all' || cours.niveau === this.selectedLevel;
      return categoryMatch && levelMatch;
    });
  }

  getCategoryIcon(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.icon : 'bi bi-question-circle';
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : 'Autre';
  }

  getNiveauColor(niveauId: string): string {
    const niveau = this.niveaux.find(n => n.id === niveauId);
    return niveau ? niveau.color : '#666';
  }

  getNiveauName(niveauId: string): string {
    const niveau = this.niveaux.find(n => n.id === niveauId);
    return niveau ? niveau.name : 'Tous';
  }
}