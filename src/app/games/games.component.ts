import { Component, OnInit } from '@angular/core';
import { GameSocket, Room } from '../server/game-socket';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {
  rooms: Room[];

  constructor(gameSocket: GameSocket) {
    this.rooms = gameSocket.rooms;
  }

  ngOnInit(): void {}
}
