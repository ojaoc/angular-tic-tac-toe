import { Component } from '@angular/core';
import { GameSocket } from '../server/game-socket';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent {
  gameSocket: GameSocket;

  constructor(gameSocket: GameSocket) {
    this.gameSocket = gameSocket;
  }
}
