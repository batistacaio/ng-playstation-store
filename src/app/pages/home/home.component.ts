import { Component } from '@angular/core';
import { games } from '../../../data/games';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  gameList: any[] = games
}
