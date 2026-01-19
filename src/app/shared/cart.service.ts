import { Injectable, signal, effect } from '@angular/core';
import { MenuItem } from './models';

export type CartVariant = 'seul' | 'frites' | 'menu';

export interface CartItem {
  item: MenuItem;
  variant?: CartVariant;
  quantity: number;
  // Ajout des choix personnalisés (optionnels)
  choices?: {
    viande?: string;
    sauce?: string;
    boisson?: string;
    fromagere?: boolean;
  };
}

@Injectable({ providedIn: 'root' })
export class CartService {
  readonly items = signal<CartItem[]>([]);
  private readonly STORAGE_KEY = 'cart-items';

  constructor() {
    this.loadFromLocalStorage();
    effect(() => {
      this.saveToLocalStorage();
    });
  }

  private saveToLocalStorage() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.items()));
    } catch (e) {
      // Ignore storage errors
    }
  }

  private loadFromLocalStorage() {
    try {
      const data = localStorage.getItem(this.STORAGE_KEY);
      if (data) {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) {
          this.items.set(parsed);
        }
      }
    } catch (e) {
      // Ignore parse errors
    }
  }

  addToCart(
    item: MenuItem,
    variant?: CartVariant,
    choices?: { viande?: string; sauce?: string; boisson?: string; fromagere?: boolean }
  ) {
    const current = this.items();
    const idx = current.findIndex(
      ci =>
        ci.item.id === item.id &&
        ci.variant === variant &&
        (!choices || JSON.stringify(ci.choices) === JSON.stringify(choices))
    );
    if (idx > -1) {
      current[idx] = { ...current[idx], quantity: current[idx].quantity + 1 };
      this.items.set([...current]);
    } else {
      this.items.set([...current, { item, variant, quantity: 1, choices }]);
    }
    // La sauvegarde est déjà gérée par le subscribe du signal
  }

  removeFromCart(item: MenuItem, variant?: CartVariant) {
    const current = this.items().filter(
      ci => !(ci.item.id === item.id && ci.variant === variant)
    );
    this.items.set(current);
    // La sauvegarde est déjà gérée par le subscribe du signal
  }

  updateQuantity(item: MenuItem, variant: CartVariant, quantity: number) {
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
    // La sauvegarde est déjà gérée par le subscribe du signal
  }

  clearCart() {
    this.items.set([]);
    // La sauvegarde est déjà gérée par le subscribe du signal
  }

  getTotal(): number {
    return this.items().reduce((sum, ci) => {
      let price: number;
      if (ci.variant && ci.item.prices) {
        price = ci.item.prices[ci.variant] ?? 0;
      } else {
        price = ci.item.priceEuros ?? 0;
      }
      return sum + price * ci.quantity;
    }, 0);
  }
}
