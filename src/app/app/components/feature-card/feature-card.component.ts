import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="feature-card text-center">
      <div class="feature-icon-wrapper mb-4">
        <div class="feature-icon bg-primary-gradient rounded-circle">
          <i [class]="icon" class="fs-2 text-white"></i>
        </div>
      </div>
      <h3 class="h5 fw-bold mb-3">{{title}}</h3>
      <p class="text-muted mb-0">{{description}}</p>
    </div>
  `,
  styles: [`
    .feature-card {
      padding: 2rem;
      transition: transform 0.3s ease;
      
      &:hover {
        transform: translateY(-10px);
        
        .feature-icon {
          transform: scale(1.1);
        }
      }
    }
    
    .feature-icon-wrapper {
      display: inline-block;
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        background: rgba(255, 107, 0, 0.1);
        border-radius: 50%;
        z-index: 0;
      }
    }
    
    .feature-icon {
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1;
      transition: transform 0.3s ease;
    }
    
    .bg-primary-gradient {
      background: linear-gradient(135deg, #FF6B00, #FF8C42);
    }
  `]
})
export class FeatureCardComponent {
  @Input() icon = 'bi bi-star';
  @Input() title = 'Titre';
  @Input() description = 'Description';
}