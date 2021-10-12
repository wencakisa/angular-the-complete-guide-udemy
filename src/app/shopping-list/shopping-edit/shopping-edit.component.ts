import {
  Component,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputElement: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputElement: ElementRef;

  @Output() onAddCallback = new EventEmitter<Ingredient>();

  onAddClick() {
    const name = this.nameInputElement.nativeElement.value;
    const amount = this.amountInputElement.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.onAddCallback.emit(newIngredient);
  }
}
