import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-card',
  template: `
    <nb-card
      class="no-select"
      (click)="handleCardClick()"
      [status]="isFull ? 'basic' : 'primary'"
    >
      <nb-card-header>{{ name }}</nb-card-header>
      <nb-card-body>{{
        isFull ? 'This game is full' : 'Click to join!'
      }}</nb-card-body>
    </nb-card>
  `,
  styles: ['nb-card { cursor: pointer }'],
})
export class GameCardComponent implements OnInit {
  @Input() name: string;
  @Input() isFull: boolean;

  constructor() {}

  ngOnInit(): void {}

  handleCardClick(): void {
    console.log('swag');
  }
}
