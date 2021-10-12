import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() onRecipeSelect = new EventEmitter<Recipe>();

  selectRecipe() {
    this.onRecipeSelect.emit(this.recipe);
  }
}
