import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedItem: string;

  onHeaderItemSelect(item: string) {
    this.selectedItem = item;
  }
}
