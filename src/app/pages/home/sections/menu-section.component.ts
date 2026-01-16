import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { MenuItem, MenuSection } from '../../../shared/models/menu.models';
import { ItemDetailModalComponent } from '../../../shared/components/item-detail-modal/item-detail-modal.component';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [CurrencyPipe, ItemDetailModalComponent],
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
}
