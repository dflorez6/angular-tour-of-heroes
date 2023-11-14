// Angular
import { Component } from '@angular/core';
import { CommonModule, NgIf, NgFor, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
// Mock DB
import { HEROES } from '../../mock-heroes';
// Interfaces
import { Hero } from '../../interfaces/hero';
// Components
import { HeroDetailComponent } from '../../components/hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    // Angular
    FormsModule,
    NgIf,
    NgFor,
    UpperCasePipe,
    // Components
    HeroDetailComponent,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  // Props
  heroes = HEROES;
  selectedHero?: Hero;

  // Methods
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
