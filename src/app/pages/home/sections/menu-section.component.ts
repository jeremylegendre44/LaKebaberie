import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { MenuItem, MenuSection } from '../../../shared/models/menu.models';
import { ItemDetailModalComponent } from '../../../shared/components/item-detail-modal/item-detail-modal.component';
import { ImageModalComponent } from '../../../shared/components/image-modal/image-modal.component';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [CurrencyPipe, ItemDetailModalComponent, ImageModalComponent],
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
}
