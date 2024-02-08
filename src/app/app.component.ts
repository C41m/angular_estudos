import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular_estudos';

  userName = 'Nadia';

  userData = {
    email: 'mug@gmail.com',
    role: 'admin',
  };
}
