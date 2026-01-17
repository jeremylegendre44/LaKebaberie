import {Component, OnDestroy, OnInit, signal, Signal} from '@angular/core';
import {CartItem, CartService} from '../cart.service';
import {CommonModule, CurrencyPipe} from '@angular/common';
import type {MenuItem} from '../models';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {
  readonly items: Signal<CartItem[]>;
  collapsed = signal(true);
  // Animation state
  vibrate = signal(false);
  grow = signal(false);
  private cartAnimateListener: EventListener | null = null;

  constructor(private readonly cartService: CartService) {
    this.items = this.cartService.items;
  }

  // Expose le total en tant que getter typé number pour le template
  get totalValue(): number {
    return this.cartService.getTotal();
  }

  ngOnInit() {
    this.cartAnimateListener = (e: Event) => {
      const ce = e as CustomEvent<{ collapsed?: boolean }>;
      this.triggerCartAnimation(!!ce.detail?.collapsed);
    };
    document.addEventListener('cart:animate', this.cartAnimateListener);
  }

  ngOnDestroy() {
    if (this.cartAnimateListener) {
      document.removeEventListener('cart:animate', this.cartAnimateListener);
      this.cartAnimateListener = null;
    }
  }

  toggleCollapse() {
    this.collapsed.update(v => !v);
  }

  remove(item: MenuItem, variant?: 'seul' | 'frites' | 'menu') {
    this.cartService.removeFromCart(item, variant);
  }

  updateQuantity(item: MenuItem, variant: 'seul' | 'frites' | 'menu' | undefined, event: Event) {
    const target = event.target as HTMLInputElement | null;
    const qty = target ? Number(target.value) : Number.NaN;
    if (Number.isFinite(qty) && qty > 0) {
      this.cartService.updateQuantity(item, variant!, qty);
    }
  }

  clear() {
    this.cartService.clearCart();
  }

  getLineTotal(ci: CartItem | null): number {
    if (!ci) return 0;
    const unit = ci.item?.prices?.[ci.variant as keyof typeof ci.item.prices] ?? ci.item?.priceEuros ?? 0;
    return unit * (ci.quantity ?? 1);
  }

  // Ajoute une méthode pour déclencher l'animation
  triggerCartAnimation(collapsed: boolean) {
    if (collapsed) {
      this.grow.set(false);
      this.grow.set(true);
      setTimeout(() => this.grow.set(false), 600);
    } else {
      this.vibrate.set(false);
      this.vibrate.set(true);
      setTimeout(() => this.vibrate.set(false), 400);
    }
  }

  onDetailsKeydown(event: KeyboardEvent) {
    // Empêche la propagation pour éviter de fermer le panier avec Entrée/Espace sur un champ interne
    if (event.key === 'Enter' || event.key === ' ') {
      event.stopPropagation();
    }
  }

  trackCartItem(ci: CartItem) {
    return ci.item.id + (ci.variant || '');
  }
}
