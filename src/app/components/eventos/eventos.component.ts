import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.scss',
})
export class EventosComponent {
  show: boolean = false;

  showMessage(): void {
    this.show = !this.show; // toggle
  }
}
