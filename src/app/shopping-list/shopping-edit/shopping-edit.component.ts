import { Component, ViewChild, ElementRef } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput', { static: false }) nameInputElement: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputElement: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddClick() {
    const name = this.nameInputElement.nativeElement.value;
    const amount = this.amountInputElement.nativeElement.value;
    const newIngredient = new Ingredient(name, amount);
    this.shoppingListService.addIngredient(newIngredient);
  }
}
