import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  input,
  Input,
  QueryList,
  signal,
  ViewChildren
} from '@angular/core';
import {CommonModule, CurrencyPipe} from '@angular/common';

import {MenuItem, MenuSection} from '../../../shared/models';
import {ItemDetailModalComponent} from '../../../shared/components';
import {ImageModalComponent} from '../../../shared/components/image-modal/image-modal.component';
import {CartService} from '../../../shared/cart.service';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, ItemDetailModalComponent, ImageModalComponent],
  templateUrl: './menu-section.component.html',
  styleUrls: ['./menu-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSectionComponent implements AfterViewInit {
  readonly section = input.required<MenuSection>();
  // Modal state
  readonly selectedItem = signal<MenuItem | null>(null);
  readonly isModalOpen = signal(false);
  readonly collapsed = signal(true);
  // Image modal state
  readonly isImageModalOpen = signal(false);
  readonly imageModalUrl = signal<string | null>(null);
  // Ajout d'un signal pour le variant présélectionné
  readonly selectedVariant = signal<'seul' | 'frites' | 'menu' | null>(null);
  private observer?: IntersectionObserver;
  @ViewChildren('itemEl')
  private readonly items!: QueryList<ElementRef<HTMLElement>>;
  private readonly isTouchDevice =
    window.matchMedia('(hover: none) and (pointer: coarse)').matches;

  constructor(private readonly cartService: CartService) {
  }

  @Input() set forceOpen(value: boolean) {
    this.collapsed.set(!value);
  }

  ngAfterViewInit(): void {
    // Réagit à CHAQUE apparition réelle d’items dans le DOM
    this.items.changes.subscribe(() => {
      this.observeItems();
    });

    // Cas où ils sont déjà présents
    this.observeItems();
  }

  toggleCollapsed() {
    this.collapsed.update(v => !v);

    // Laisser Angular rendre le DOM
    setTimeout(() => {
      this.observeItems();
    });
  }



  openItemDetail(item: MenuItem, variant?: 'seul' | 'frites' | 'menu') {
    this.selectedItem.set(item);
    this.selectedVariant.set(variant ?? null);
    this.isModalOpen.set(true);
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen.set(false);
    // Réactiver le scroll du body
    document.body.style.overflow = '';
  }

  addToCart(item: MenuItem, variant?: 'seul' | 'frites' | 'menu') {
    this.cartService.addToCart(item, variant);
    // Déclenche l'animation du panier via un Event personnalisé (meilleure pratique Angular)
    const event = new CustomEvent('cart:animate', {
      detail: {collapsed: document.querySelector('.cart')?.classList.contains('cart--collapsed')}
    });
    document.dispatchEvent(event);
  }


  openImageModal(url: string) {
    this.imageModalUrl.set(url);
    this.isImageModalOpen.set(true);
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
  }

  closeImageModal() {
    this.isImageModalOpen.set(false);
    this.imageModalUrl.set(null);
    // Réactiver le scroll du body
    document.body.style.overflow = '';
  }

  private observeItems(): void {
    if (!('IntersectionObserver' in window) || !this.isTouchDevice) {
      return;
    }

    if (!this.observer) {
      this.observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-hovered');
            this.observer!.unobserve(entry.target); // ⭐ CRUCIAL
          } else {
            entry.target.classList.remove('is-hovered');
          }
        });
      }, {
        threshold: 0.4
      });
    }

    this.items.forEach(ref => {
      const el = ref.nativeElement;
      if (el.classList.contains('item--has-image')) {
        this.observer!.observe(el);
      }
    });
  }

  isSingleChoice(item: MenuItem): boolean {
    return !item.image && !item.description && (!item.tags || item.tags.length === 0) && !item.prices && !!item.priceEuros;
  }

  requiresChoice(item: MenuItem, variant?: 'seul' | 'frites' | 'menu'): boolean {
    // On vérifie si l'item est un tacos ou un sandwich avec 'au choix' dans les ingrédients ou description
    const isTacos = item.name.toLowerCase().includes('tacos');
    const hasViandeAuChoix = item.ingredients?.some(ing => ing.toLowerCase().includes('viande au choix'));
    const hasSauceAuChoix = item.ingredients?.some(ing => ing.toLowerCase().includes('sauce au choix'));
    const hasAuChoixDesc = item.description?.toLowerCase().includes('au choix');
    // Pour le menu, il faut aussi choisir une boisson
    if (variant === 'menu' && (isTacos || hasViandeAuChoix || hasSauceAuChoix || hasAuChoixDesc)) {
      return true;
    }
    // Pour seul/frites, viande ou sauce suffit
    if ((variant === 'seul' || variant === 'frites') && (isTacos || hasViandeAuChoix || hasSauceAuChoix || hasAuChoixDesc)) {
      return true;
    }
    return false;
  }

  onItemClick(item: MenuItem, event: Event, variant?: 'seul' | 'frites' | 'menu') {
    if (this.isSingleChoice(item)) {
      this.addToCart(item);
      event.stopPropagation();
    } else {
      this.openItemDetail(item, variant);
    }
  }
}
