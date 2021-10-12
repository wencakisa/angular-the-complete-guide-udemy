import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  @Output() onHeaderItemSelect = new EventEmitter<string>();

  onItemSelect(itemName: string) {
    this.onHeaderItemSelect.emit(itemName);
  }
}
