import { ChangeDetectionStrategy, Component, computed } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { CHOICES, MENU_SECTIONS, ORDERING_NOTE, PRICING_HIGHLIGHTS, RESTAURANT_INFO } from '../../shared/data/menu.data';
import { HeaderComponent, NavLink } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { SectionHeaderComponent } from '../../shared/components/section-header/section-header.component';
import { MenuSectionComponent } from './sections/menu-section.component';
import { ChoicesSectionComponent } from './sections/choices-section.component';
import { PricingSectionComponent } from './sections/pricing-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    SectionHeaderComponent,
    MenuSectionComponent,
    ChoicesSectionComponent,
    PricingSectionComponent
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

  constructor(title: Title) {
    title.setTitle('La Kebaberie — Saint-Étienne-de-Montluc');
  }
}
