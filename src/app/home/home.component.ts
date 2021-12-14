import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameSocket, Room } from '../server/game-socket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  gameSocket: GameSocket;

  constructor(private _route: Router, gameSocket: GameSocket) {
    this.gameSocket = gameSocket;
  }

  ngOnInit(): void {}

  handleNewGame() {
    const { id }: Room = this.gameSocket.joinRoom();
    this._route.navigateByUrl(`/games/${id}`);
  }
}
