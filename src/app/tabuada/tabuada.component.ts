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

  tabuada() {
    this.counter + 5;
  }
}
