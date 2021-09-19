import { Component } from '@angular/core';

export function* getIdGenerator() {
  let id: number = (new Date()).getTime();
  while (true) {
    yield id++;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
  }
}
