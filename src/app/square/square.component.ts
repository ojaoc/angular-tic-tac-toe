import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button nbButton *ngIf="!value" [disabled]="gameOver">{{ value }}</button>
    <button
      nbButton
      hero
      status="success"
      *ngIf="value === 'X'"
      [disabled]="gameOver"
    >
      {{ value }}
    </button>
    <button
      nbButton
      hero
      status="info"
      *ngIf="value === 'O'"
      [disabled]="gameOver"
    >
      {{ value }}
    </button>
  `,
  styles: ['button { width: 100%; height: 100%; font-size: 5em !important; }'],
})
export class SquareComponent {
  @Input() value: 'X' | 'O';
  @Input() gameOver: boolean;

  constructor() {}
}
