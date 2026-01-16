import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface FilterState {
  searchQuery: string;
  categories: string[];
  ingredients: string[];
}

export interface FilterOption {
  id: string;
  label: string;
  icon: string;
  count?: number;
}

@Component({
  selector: 'app-menu-search-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './menu-search-filter.component.html',
  styleUrl: './menu-search-filter.component.css'
})
export class MenuSearchFilterComponent {
  /** Liste de tous les ingrédients disponibles */
  availableIngredients = input<string[]>([]);

  /** Nombre total d'items */
  totalItems = input<number>(0);

  /** Nombre d'items filtrés */
  filteredCount = input<number>(0);

  /** Émet les changements de filtres */
  filterChange = output<FilterState>();

  /** État de la recherche */
  searchQuery = signal('');

  /** Catégories sélectionnées */
  selectedCategories = signal<Set<string>>(new Set());

  /** Ingrédients sélectionnés */
  selectedIngredients = signal<Set<string>>(new Set());

  /** Afficher/masquer le panneau des filtres avancés */
  showAdvancedFilters = signal(false);

  /** Options de catégories */
  readonly categoryOptions: FilterOption[] = [
    { id: 'vegetarien', label: 'Végétarien', icon: '🥬' },
    { id: 'halal', label: 'Halal', icon: '🍖' },
    { id: 'epice', label: 'Épicé', icon: '🌶️' },
    { id: 'populaire', label: 'Populaire', icon: '⭐' },
    { id: 'nouveau', label: 'Nouveau', icon: '✨' }
  ];

  /** Vérifie si une catégorie est sélectionnée */
  isCategorySelected(categoryId: string): boolean {
    return this.selectedCategories().has(categoryId);
  }

  /** Vérifie si un ingrédient est sélectionné */
  isIngredientSelected(ingredient: string): boolean {
    return this.selectedIngredients().has(ingredient);
  }

  /** Toggle une catégorie */
  toggleCategory(categoryId: string) {
    const categories = new Set(this.selectedCategories());
    if (categories.has(categoryId)) {
      categories.delete(categoryId);
    } else {
      categories.add(categoryId);
    }
    this.selectedCategories.set(categories);
    this.emitFilterChange();
  }

  /** Toggle un ingrédient */
  toggleIngredient(ingredient: string) {
    const ingredients = new Set(this.selectedIngredients());
    if (ingredients.has(ingredient)) {
      ingredients.delete(ingredient);
    } else {
      ingredients.add(ingredient);
    }
    this.selectedIngredients.set(ingredients);
    this.emitFilterChange();
  }

  /** Gère le changement de recherche */
  onSearchChange(query: string) {
    this.searchQuery.set(query);
    this.emitFilterChange();
  }

  /** Toggle les filtres avancés */
  toggleAdvancedFilters() {
    this.showAdvancedFilters.set(!this.showAdvancedFilters());
  }

  /** Réinitialise tous les filtres */
  clearAllFilters() {
    this.searchQuery.set('');
    this.selectedCategories.set(new Set());
    this.selectedIngredients.set(new Set());
    this.emitFilterChange();
  }

  /** Nombre de filtres actifs */
  get activeFiltersCount(): number {
    return this.selectedCategories().size + this.selectedIngredients().size;
  }

  /** Émet l'état actuel des filtres */
  private emitFilterChange() {
    this.filterChange.emit({
      searchQuery: this.searchQuery(),
      categories: Array.from(this.selectedCategories()),
      ingredients: Array.from(this.selectedIngredients())
    });
  }
}
