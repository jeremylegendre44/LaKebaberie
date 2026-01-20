import { Component, input, output, signal, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../models';
import { CartService } from '../../cart.service';
import { CHOICES } from '../../data/menu.data';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MultiViandeSelectComponent} from '../multi-viande-select.component';

@Component({
  selector: 'app-item-detail-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MultiViandeSelectComponent],
  templateUrl: './item-detail-modal.component.html',
  styleUrls: ['./item-detail-modal.component.css']
})
export class ItemDetailModalComponent {
  @Input() selectedVariantFromParent: 'seul' | 'frites' | 'menu' | null = null;
  item = input.required<MenuItem>();
  isOpen = input<boolean>(false);
  closed = output<void>();

  // Signaux pour les choix
  selectedViande = signal<string | string[] | null>(null);
  selectedSauce = signal<string | null>(null);
  selectedBoisson = signal<string | null>(null);
  selectedVariant = signal<'seul' | 'frites' | 'menu' | null>(null);
  // Toggle sauce fromagère (pour tacos)
  withFromagere = signal<boolean>(true);
  showWarning = signal<boolean>(false);

  // Exemples de choix (à adapter si besoin)
  viandes = [...(CHOICES.find(c => c.id === 'viandes')?.examples ?? [])]; // mutable string[]
  sauces = CHOICES.find(c => c.id === 'sauces')?.examples ?? [];
  boissons = CHOICES.find(c => c.id === 'boissons')?.examples ?? [];

  constructor(public cartService: CartService) {}

  ngOnChanges() {
    if (this.selectedVariantFromParent) {
      this.selectedVariant.set(this.selectedVariantFromParent);
    }
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('modal-backdrop')) {
      this.closed.emit();
    }
  }

  onCloseClick() {
    this.closed.emit();
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape') {
      this.closed.emit();
    }
  }

  // Détermine si un choix est requis pour cet item/variant
  requiresViande(): boolean {
    return this.item().ingredients?.some(ing => ing.toLowerCase().includes('viande au choix')) || this.item().name.toLowerCase().includes('tacos');
  }
  requiresSauce(): boolean {
    return this.item().ingredients?.some(ing => ing.toLowerCase().includes('sauce au choix')) || this.item().name.toLowerCase().includes('tacos');
  }
  requiresBoisson(): boolean {
    return this.selectedVariant() === 'menu';
  }

  canAddToCart(): boolean {
    if (this.requiresViande()) {
      if (this.isTacos() && (this.item().name.includes('2 viande') || this.item().name.includes('3 viande'))) {
        const max = this.item().name.includes('3 viande') ? 3 : 2;
        const viande = this.selectedViande();
        if (!Array.isArray(viande) || viande?.length !== max) return false;
      } else {
        if (!this.selectedViande()) return false;
      }
    }
    if (this.requiresSauce() && !this.selectedSauce()) return false;
    if (this.requiresBoisson() && !this.selectedBoisson()) return false;
    return true;
  }

  // Ajout au panier avec les choix
  addToCart(variant?: 'seul' | 'frites' | 'menu') {
    this.selectedVariant.set(variant ?? null);
    if (!this.canAddToCart()) {
      this.showWarning.set(true);
      return;
    }
    this.cartService.addToCart(this.item(), variant, {
      viande: Array.isArray(this.selectedViande()) || typeof this.selectedViande() === 'string' ? this.selectedViande() ?? undefined : undefined as any,
      sauce: this.selectedSauce() ?? undefined,
      boisson: this.requiresBoisson() ? this.selectedBoisson() ?? undefined : undefined,
      fromagere: this.isTacos() ? this.withFromagere() : undefined
    });
    // Déclenche l'animation du panier (cart:animate) comme sur la page menu
    const event = new CustomEvent('cart:animate', {
      detail: { collapsed: document.querySelector('.cart')?.classList.contains('cart--collapsed') }
    });
    document.dispatchEvent(event);
    this.closed.emit();
    // Reset des choix
    this.selectedViande.set(null);
    this.selectedSauce.set(null);
    this.selectedBoisson.set(null);
    this.selectedVariant.set(null);
    this.withFromagere.set(true);
    this.showWarning.set(false);
  }

  // Quand l'utilisateur change une option, on cache le warning
  onOptionChange() {
    this.showWarning.set(false);
  }

  isTacos(): boolean {
    return this.item().name.toLowerCase().includes('tacos');
  }

  // Propriétés pour ngModel compatible avec signal
  get viande() { return this.selectedViande(); }
  set viande(val: string | string[] | null) { this.selectedViande.set(val); }
  get sauce() { return this.selectedSauce(); }
  set sauce(val: string | null) { this.selectedSauce.set(val); }
  get boisson() { return this.selectedBoisson(); }
  set boisson(val: string | null) { this.selectedBoisson.set(val); }
  // Propriété pour ngModel compatible avec signal (toggle sauce fromagère)
  get fromagere() { return this.withFromagere(); }
  set fromagere(val: boolean) { this.withFromagere.set(val); }

  getSelectedViandesArray(): string[] {
    const v = this.selectedViande();
    return Array.isArray(v) ? v : [];
  }

  protected readonly Array = Array;
}
