// Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

// Interfaces
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-heroes',
  standalone: true,
  imports: [
    CommonModule,
    // Angular
    FormsModule,
  ],
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss',
})
export class HeroesComponent {
  // Creating an instance of the Hero Interface
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
}
