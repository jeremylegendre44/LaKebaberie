import { Component, computed, signal, OnInit, OnDestroy } from '@angular/core';
import { CartService } from '../cart.service';
import { CurrencyPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit, OnDestroy {
  readonly items;
  readonly total;
  collapsed = signal(true);

  // Animation state
  vibrate = signal(false);
  grow = signal(false);

  private cartAnimateListener: any;

  constructor(private cartService: CartService) {
    this.items = this.cartService.items;
    this.total = computed(() => this.cartService.getTotal());
  }

  ngOnInit() {
    this.cartAnimateListener = (e: CustomEvent) => {
      this.triggerCartAnimation(!!e.detail.collapsed);
    };
    document.addEventListener('cart:animate', this.cartAnimateListener as EventListener);
  }

  ngOnDestroy() {
    document.removeEventListener('cart:animate', this.cartAnimateListener as EventListener);
  }

  toggleCollapse() {
    this.collapsed.update(v => !v);
  }

  remove(item: any, variant: any) {
    this.cartService.removeFromCart(item, variant);
  }

  updateQuantity(item: any, variant: any, event: any) {
    const qty = +event.target.value;
    this.cartService.updateQuantity(item, variant, qty);
  }

  clear() {
    this.cartService.clearCart();
  }

  getLineTotal(ci: any): number {
    if (!ci) return 0;
    let unit = 0;
    if (ci.variant && ci.item && ci.item.prices && ci.item.prices[ci.variant] !== undefined) {
      unit = ci.item.prices[ci.variant];
    } else if (ci.item && ci.item.priceEuros !== undefined) {
      unit = ci.item.priceEuros;
    }
    return unit * (ci.quantity != null ? ci.quantity : 1);
  }

  // Ajoute une méthode pour déclencher l'animation
  triggerCartAnimation(collapsed: boolean) {
    if (collapsed) {
      this.grow.set(false);
      void this.grow.set(true);
      setTimeout(() => this.grow.set(false), 600);
    } else {
      this.vibrate.set(false);
      void this.vibrate.set(true);
      setTimeout(() => this.vibrate.set(false), 400);
    }
  }
}
