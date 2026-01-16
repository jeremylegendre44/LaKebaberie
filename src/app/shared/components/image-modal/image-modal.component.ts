import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  template: `
    <div class="image-modal-backdrop" (click)="onBackdropClick($event)" tabindex="0" role="dialog" aria-modal="true" [attr.aria-label]="alt">
      <div class="image-modal">
        <button class="image-modal__close" (click)="closed.emit()" aria-label="Fermer">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <img [src]="src" [alt]="alt" class="image-modal__img" />
      </div>
    </div>
  `,
  styleUrls: ['./image-modal.component.css']
})
export class ImageModalComponent {
  @Input() src!: string;
  @Input() alt: string = '';
  @Output() closed = new EventEmitter<void>();

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('image-modal-backdrop')) {
      this.closed.emit();
    }
  }
}
