import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MENU_SECTIONS, RESTAURANT_INFO } from '../../shared/data';
import { HeaderComponent, NavLink, FooterComponent, SectionHeaderComponent, MenuSearchFilterComponent, type FilterState } from '../../shared/components';
import { MenuSectionComponent } from './sections/menu-section.component';
import { MenuSection } from '../../shared/models';
import type { Category } from '../../shared/models';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SectionHeaderComponent,
    MenuSectionComponent,
    MenuSearchFilterComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  readonly menuSections = MENU_SECTIONS;
  readonly restaurant = RESTAURANT_INFO;

  readonly currentYear = computed(() => new Date().getFullYear());

  readonly navLinks: readonly NavLink[] = [
    { label: 'Carte', href: '#carte' },
    { label: 'Infos', href: '#infos' },
    { label: 'Appeler', href: `tel:${RESTAURANT_INFO.phone.replaceAll(' ', '')}`, isCta: true }
  ];

  // État des filtres
  readonly filterState = signal<FilterState>({
    searchQuery: '',
    categories: [],
    ingredients: [],
    sections: []
  });

  // Liste de tous les ingrédients uniques
  readonly allIngredients = computed(() => {
    const ingredients = new Set<string>();
    this.menuSections.forEach(section => {
      section.items.forEach(item => {
        item.ingredients?.forEach(ing => ingredients.add(ing));
      });
    });
    return Array.from(ingredients).sort((a, b) => a.localeCompare(b));
  });

  // Nombre total d'items
  readonly totalItemsCount = computed(() => {
    return this.menuSections.reduce((acc, section) => acc + section.items.length, 0);
  });

  // Sections filtrées
  readonly filteredSections = computed(() => {
    const state = this.filterState();
    const query = state.searchQuery.toLowerCase().trim();
    const categories = state.categories;
    const ingredients = state.ingredients;
    const sections = state.sections;

    // Si aucun filtre, retourner tout
    if (!query && categories.length === 0 && ingredients.length === 0 && sections.length === 0) {
      return this.menuSections;
    }

    // Filtrer les sections
    return this.menuSections
      .filter(section => sections.length === 0 || sections.includes(section.id))
      .map(section => {
        const filteredItems = section.items.filter(item => {
          // Filtre par nom
          const matchesQuery = !query ||
            item.name.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query) ||
            section.title.toLowerCase().includes(query);

          // Filtre par catégorie
          const matchesCategory = categories.length === 0 ||
            categories.some((cat: Category) => item.categories?.includes(cat));

          // Filtre par ingrédient
          const matchesIngredient = ingredients.every(ing => item.ingredients?.includes(ing));

          return matchesQuery && matchesCategory && matchesIngredient;
        });

        return {
          ...section,
          items: filteredItems
        } as MenuSection;
      })
      .filter(section => section.items.length > 0);
  });

  // Nombre d'items filtrés
  readonly filteredItemsCount = computed(() => {
    return this.filteredSections().reduce((acc, section) => acc + section.items.length, 0);
  });

  // Gère le changement de filtre
  onFilterChange(state: FilterState) {
    this.filterState.set(state);
  }

  constructor(title: Title) {
    title.setTitle('La Kebaberie — Saint-Étienne-de-Montluc');
  }
}
