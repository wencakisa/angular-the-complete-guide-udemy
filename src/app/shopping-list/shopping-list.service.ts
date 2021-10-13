import { Injectable, EventEmitter } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 10),
    new Ingredient('Cucumbers', 7)
  ];

  onIngredientsChange = new EventEmitter<Ingredient[]>();

  getIngredients() {
    return new Array(...this.ingredients);
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.onIngredientsChange.emit(this.ingredients);
  }

  addIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.onIngredientsChange.emit(this.ingredients);
  }
}
