import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItem } from '../../models';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-item-detail-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-detail-modal.component.html',
  styleUrls: ['./item-detail-modal.component.css']
})
export class ItemDetailModalComponent {
  item = input.required<MenuItem>();
  isOpen = input<boolean>(false);
  closed = output<void>();

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

  addToCart(variant?: 'seul' | 'frites' | 'menu') {
    this.cartService.addToCart(this.item(), variant);
  }
}
