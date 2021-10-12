import { Component, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'description', 'https://picsum.photos/700'),
    new Recipe('Test recipe', 'description', 'https://picsum.photos/700'),
    new Recipe('Test recipe', 'description', 'https://picsum.photos/700')
  ];
  @Output() onRecipeSelectCallback = new EventEmitter<Recipe>();

  onRecipeSelected(recipe: Recipe) {
    this.onRecipeSelectCallback.emit(recipe);
  }
}
