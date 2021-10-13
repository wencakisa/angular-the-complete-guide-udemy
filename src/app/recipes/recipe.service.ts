import { Injectable, EventEmitter } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Schnitzel',
      'description',
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 3)]
    ),
    new Recipe(
      'Skaptoburger',
      'description',
      'https://licatanagrada.com/wp-content/uploads/2020/06/skaptoburger-26.jpg',
      [new Ingredient('Bun', 2), new Ingredient('Cheddar', 2)]
    )
  ];

  onRecipeSelect = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return new Array(...this.recipes);
  }

  addIngredientsToShoppingList(recipe: Recipe) {
    this.shoppingListService.addIngredients(recipe.ingredients);
  }
}
