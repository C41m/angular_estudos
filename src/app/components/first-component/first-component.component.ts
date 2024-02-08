import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss',
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Caio';
  age: number = 30;
  job: string = 'Programador';
  hobbies: string[] = ['Correr', 'Jogar', 'Estudar'];
  car = {
    name: 'HB20',
    year: 2019,
  };

  constructor() {}

  ngOnInit(): void {}
}
