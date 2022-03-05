import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabuada',
  templateUrl: './tabuada.component.html',
  styleUrls: ['./tabuada.component.css'],
})
export class TabuadaComponent implements OnInit {
  counter = 0;
  constructor() {}

  ngOnInit() {}

  add() {
    this.counter++;
  }

  getRandomNumbers() {
    return [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
  }
}
