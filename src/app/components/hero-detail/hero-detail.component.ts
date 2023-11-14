import { Component, Input } from '@angular/core';
import { CommonModule, NgIf, UpperCasePipe } from '@angular/common';
import {FormsModule} from '@angular/forms';
// Interfaces
import { Hero } from '../../interfaces/hero';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    CommonModule,
    // Angular
    FormsModule,
    NgIf,
    UpperCasePipe,
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss',
})
export class HeroDetailComponent {
  // The hero property must be an Input property, annotated with the @Input() decorator, 
  // because the external HeroesComponent binds to it like this.
  @Input() hero?: Hero;
}
