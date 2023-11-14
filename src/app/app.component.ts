// Angular
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

// Components
import { HeroesComponent } from './components/heroes/heroes.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    // Angular
    RouterOutlet,    
    // Components
    HeroesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heroes'; // This is a prop that is passed to the view (app.component.html)
}
