import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CurrencyPipe, CommonModule } from '@angular/common';

import { MenuItem, MenuSection } from '../../../shared/models';
import { ItemDetailModalComponent } from '../../../shared/components';
import { ImageModalComponent } from '../../../shared/components/image-modal/image-modal.component';
import { CartService } from '../../../shared/cart.service';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [CurrencyPipe, CommonModule, ItemDetailModalComponent, ImageModalComponent],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSectionComponent {
  readonly section = input.required<MenuSection>();

  // Modal state
  readonly selectedItem = signal<MenuItem | null>(null);
  readonly isModalOpen = signal(false);
  readonly collapsed = signal(false);

  // Image modal state
  readonly isImageModalOpen = signal(false);
  readonly imageModalUrl = signal<string | null>(null);

  fireworkIndex: string|null = null;

  constructor(private readonly cartService: CartService) {}

  openItemDetail(item: MenuItem) {
    this.selectedItem.set(item);
    this.isModalOpen.set(true);
    // Empêcher le scroll du body
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen.set(false);
    // Réactiver le scroll du body
    document.body.style.overflow = '';
  }

  toggleCollapsed() {
    this.collapsed.update(v => !v);
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

  addToCart(item: MenuItem, variant?: 'seul' | 'frites' | 'menu') {
    this.cartService.addToCart(item, variant);
    // Déclenche l'animation du panier via un Event personnalisé (meilleure pratique Angular)
    const event = new CustomEvent('cart:animate', {
      detail: { collapsed: document.querySelector('.cart')?.classList.contains('cart--collapsed') }
    });
    document.dispatchEvent(event);
  }

  isSingleChoice(item: any): boolean {
    return !item.image && !item.description && (!item.tags || item.tags.length === 0) && !item.prices && !!item.priceEuros;
  }

  onSingleChoiceClick(item: any, event: Event) {
    if (this.isSingleChoice(item)) {
      this.addToCart(item);
      event.stopPropagation();
    }
  }

  onItemClick(item: any, event: Event) {
    if (this.isSingleChoice(item)) {
      this.addToCart(item);
      event.stopPropagation();
    } else {
      this.openItemDetail(item);
    }
  }
}
