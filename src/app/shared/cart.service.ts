import { Injectable, signal } from '@angular/core';
import { MenuItem } from '../shared/models/menu.models';

export interface CartItem {
  item: MenuItem;
  variant?: 'seul' | 'frites' | 'menu';
  quantity: number;
}

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly items = signal<CartItem[]>([]);

  addToCart(item: MenuItem, variant?: 'seul' | 'frites' | 'menu') {
    const current = this.items();
    const idx = current.findIndex(
      ci => ci.item.id === item.id && ci.variant === variant
    );
    if (idx > -1) {
      current[idx] = { ...current[idx], quantity: current[idx].quantity + 1 };
      this.items.set([...current]);
    } else {
      this.items.set([...current, { item, variant, quantity: 1 }]);
    }
  }

  removeFromCart(item: MenuItem, variant?: 'seul' | 'frites' | 'menu') {
    const current = this.items().filter(
      ci => !(ci.item.id === item.id && ci.variant === variant)
    );
    this.items.set(current);
  }

  updateQuantity(item: MenuItem, variant: 'seul' | 'frites' | 'menu', quantity: number) {
    const current = this.items();
    const idx = current.findIndex(
      ci => ci.item.id === item.id && ci.variant === variant
    );
    if (idx > -1) {
      if (quantity <= 0) {
        this.removeFromCart(item, variant);
      } else {
        current[idx] = { ...current[idx], quantity };
        this.items.set([...current]);
      }
    }
  }

  clearCart() {
    this.items.set([]);
  }

  getTotal() {
    return this.items().reduce((sum, ci) => {
      let price = 0;
      if (ci.variant && ci.item.prices) {
        price = ci.item.prices[ci.variant] ?? 0;
      } else {
        price = ci.item.priceEuros ?? 0;
      }
      return sum + price * ci.quantity;
    }, 0);
  }
}
