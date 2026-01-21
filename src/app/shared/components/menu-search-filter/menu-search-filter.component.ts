import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MENU_SECTIONS } from '../../data';
import type { Category } from '../../models';

export interface FilterState {
  searchQuery: string;
  categories: Category[];
  ingredients: string[];
  sections: string[];
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
  styleUrls: ['./menu-search-filter.component.css']
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
    { id: 'vegetarien', label: 'Végétarien', icon: '\ud83e\udd6c' },
    { id: 'halal', label: 'Halal', icon: '\ud83c\udf56' },
    { id: 'epice', label: 'Épicé', icon: '\ud83c\udf36\ufe0f' },
    { id: 'populaire', label: 'Populaire', icon: '\u2b50' },
    { id: 'nouveau', label: 'Nouveau', icon: '\u2728' }
  ];

  /** Liste de toutes les sections dynamiques */
  readonly sectionOptions: { id: string; label: string; icon?: string }[] = MENU_SECTIONS.map(s => ({ id: s.id, label: s.title, icon: s.icon }));

  /** Sections sélectionnées */
  selectedSections = signal<Set<string>>(new Set());

  /** Vérifie si une catégorie est sélectionnée */
  isCategorySelected(categoryId: string): boolean {
    return this.selectedCategories().has(categoryId);
  }

  /** Vérifie si un ingrédient est sélectionné */
  isIngredientSelected(ingredient: string): boolean {
    return this.selectedIngredients().has(ingredient);
  }

  /** Vérifie si une section est sélectionnée */
  isSectionSelected(sectionId: string): boolean {
    return this.selectedSections().has(sectionId);
  }

  /** Toggle une section OU une catégorie (désélectionne si déjà sélectionné) */
  toggleSection(sectionId: string) {
    const sections = new Set(this.selectedSections());
    if (sections.has(sectionId)) {
      sections.delete(sectionId);
    } else {
      sections.add(sectionId);
    }
    this.selectedSections.set(sections);
    this.emitFilterChange();
  }

  /** Toggle une catégorie (désélectionne si déjà sélectionné) */
  toggleCategory(categoryId: string) {
    const categories = new Set(this.selectedCategories());
    if (categories.has(categoryId)) {
      categories.delete(categoryId); // Retire si déjà sélectionné
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

  /** Réinitialise tous les filtres */
  clearAllFilters() {
    this.searchQuery.set('');
    this.selectedCategories.set(new Set());
    this.selectedIngredients.set(new Set());
    this.selectedSections.set(new Set());
    this.emitFilterChange();
  }

  /** Nombre de filtres actifs */
  get activeFiltersCount(): number {
    return this.selectedCategories().size + this.selectedIngredients().size + this.selectedSections().size;
  }

  /** Émet l'état actuel des filtres */
  private emitFilterChange() {
    this.filterChange.emit({
      searchQuery: this.searchQuery(),
      categories: Array.from(this.selectedCategories()) as Category[],
      ingredients: Array.from(this.selectedIngredients()),
      sections: Array.from(this.selectedSections())
    });
  }
}
