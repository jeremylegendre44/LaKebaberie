import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CHOICES, MENU_SECTIONS, ORDERING_NOTE, PRICING_HIGHLIGHTS, RESTAURANT_INFO } from '../../shared/data/menu.data';
import { HeaderComponent, NavLink } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { MenuSectionComponent } from './sections/menu-section.component';
import { ChoicesSectionComponent } from './sections/choices-section.component';
import { PricingSectionComponent } from './sections/pricing-section.component';
import { MenuSearchFilterComponent, FilterState } from '../../shared/components/menu-search-filter/menu-search-filter.component';
import { MenuSection } from '../../shared/models/menu.models';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SectionHeaderComponent,
    MenuSectionComponent,
    ChoicesSectionComponent,
    PricingSectionComponent,
    MenuSearchFilterComponent
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  readonly pricingHighlights = PRICING_HIGHLIGHTS;
  readonly menuSections = MENU_SECTIONS;
  readonly choices = CHOICES;
  readonly orderingNote = ORDERING_NOTE;
  readonly restaurant = RESTAURANT_INFO;

  readonly currentYear = computed(() => new Date().getFullYear());

  readonly navLinks: readonly NavLink[] = [
    { label: 'Carte', href: '#carte' },
    { label: 'Infos', href: '#infos' },
    { label: 'Appeler', href: `tel:${RESTAURANT_INFO.phone.replace(/\s/g, '')}`, isCta: true }
  ];

  // État des filtres
  readonly filterState = signal<FilterState>({
    searchQuery: '',
    categories: [],
    ingredients: []
  });

  // Liste de tous les ingrédients uniques
  readonly allIngredients = computed(() => {
    const ingredients = new Set<string>();
    this.menuSections.forEach(section => {
      section.items.forEach(item => {
        item.ingredients?.forEach(ing => ingredients.add(ing));
      });
    });
    return Array.from(ingredients).sort();
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

    // Si aucun filtre, retourner tout
    if (!query && categories.length === 0 && ingredients.length === 0) {
      return this.menuSections;
    }

    // Filtrer les sections
    return this.menuSections
      .map(section => {
        const filteredItems = section.items.filter(item => {
          // Filtre par nom
          const matchesQuery = !query ||
            item.name.toLowerCase().includes(query) ||
            item.description?.toLowerCase().includes(query);

          // Filtre par catégorie
          const matchesCategory = categories.length === 0 ||
            categories.some(cat => item.categories?.includes(cat as any));

          // Filtre par ingrédient
          const matchesIngredient = ingredients.length === 0 ||
            ingredients.every(ing => item.ingredients?.includes(ing));

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
