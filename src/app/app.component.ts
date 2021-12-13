import { Component } from '@angular/core';
import { GameSocket } from './server/game-socket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  gameSocket: GameSocket;

  constructor(gameSocket: GameSocket) {
    this.gameSocket = gameSocket;
  }
}
