import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.scss',
})
export class ParentDataComponent {
  @Input() name: string = '';
  @Input() userData: { email: string; role: string } = { email: '', role: '' };
  @Input() book: string = '';
}
