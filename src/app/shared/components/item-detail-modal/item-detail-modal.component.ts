import { Component, input, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../models';
import { CartService } from '../../cart.service';
import { CHOICES } from '../../data/menu.data';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-item-detail-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './item-detail-modal.component.html',
  styleUrls: ['./item-detail-modal.component.css']
})
export class ItemDetailModalComponent {
  item = input.required<MenuItem>();
  isOpen = input<boolean>(false);
  closed = output<void>();

  // Signaux pour les choix
  selectedViande = signal<string | null>(null);
  selectedSauce = signal<string | null>(null);
  selectedBoisson = signal<string | null>(null);
  selectedVariant = signal<'seul' | 'frites' | 'menu' | null>(null);
  // Toggle sauce fromagère (pour tacos)
  withFromagere = signal<boolean>(true);

  // Exemples de choix (à adapter si besoin)
  viandes = CHOICES.find(c => c.id === 'viandes')?.examples ?? [];
  sauces = CHOICES.find(c => c.id === 'sauces')?.examples ?? [];
  boissons = CHOICES.find(c => c.id === 'boissons')?.examples ?? [];

  constructor(public cartService: CartService) {}

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
    if (this.requiresViande() && !this.selectedViande()) return false;
    if (this.requiresSauce() && !this.selectedSauce()) return false;
    if (this.requiresBoisson() && !this.selectedBoisson()) return false;
    return true;
  }

  // Ajout au panier avec les choix
  addToCart(variant?: 'seul' | 'frites' | 'menu') {
    this.selectedVariant.set(variant ?? null);
    // Si on clique sur un variant différent, on ne valide pas tout de suite
    if (this.selectedVariant() !== variant) return;
    if (!this.canAddToCart()) return;
    this.cartService.addToCart(this.item(), variant, {
      viande: this.selectedViande() ?? undefined,
      sauce: this.selectedSauce() ?? undefined,
      boisson: this.requiresBoisson() ? this.selectedBoisson() ?? undefined : undefined,
      fromagere: this.isTacos() ? this.withFromagere() : undefined
    });
    this.closed.emit();
    // Reset des choix
    this.selectedViande.set(null);
    this.selectedSauce.set(null);
    this.selectedBoisson.set(null);
    this.selectedVariant.set(null);
    this.withFromagere.set(true);
  }

  isTacos(): boolean {
    return this.item().name.toLowerCase().includes('tacos');
  }

  // Propriétés pour ngModel compatible avec signal
  get viande() { return this.selectedViande(); }
  set viande(val: string | null) { this.selectedViande.set(val); }
  get sauce() { return this.selectedSauce(); }
  set sauce(val: string | null) { this.selectedSauce.set(val); }
  get boisson() { return this.selectedBoisson(); }
  set boisson(val: string | null) { this.selectedBoisson.set(val); }
  // Propriété pour ngModel compatible avec signal (toggle sauce fromagère)
  get fromagere() { return this.withFromagere(); }
  set fromagere(val: boolean) { this.withFromagere.set(val); }
}
