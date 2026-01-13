import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./app/pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'abonnements',
    loadComponent: () => import('./app/pages/abonnements/abonnements.component').then(m => m.AbonnementsComponent)
  },
  {
    path: 'cours',
    loadComponent: () => import('./app/pages/cours/cours.component').then(m => m.CoursComponent)
  },
//   {
//     path: 'reservation',
//     loadComponent: () => import('./app/pages/reservation/reservation.component').then(m => m.ReservationComponent),
//     canActivate: [authGuard]
//   },
  {
    path: 'contact',
    loadComponent: () => import('./app/pages/contact/contact.component').then(m => m.ContactComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];