import { Component, Input, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedIdFromUser?: number;
  // @Input() selectedIdFromUser?: number;

  onSelectedId(id) {
    this.selectedIdFromUser = id;
    console.log('App component', id);
  }
}
