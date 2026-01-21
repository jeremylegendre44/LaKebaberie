import { Component, Input, Output, EventEmitter, OnChanges, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-multi-viande-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="multi-viande-select">
      <label>{{ label }} <span *ngIf="max > 1">(max {{ max }})</span></label>
      <div class="chips">
        <span *ngFor="let v of selected" class="chip">
          {{ v }}
          <button type="button" (click)="remove(v)" aria-label="Retirer {{v}}">×</button>
        </span>
      </div>
      <div class="dropdown" [class.open]="dropdownOpen">
        <button type="button" class="dropdown-toggle" (click)="toggleDropdown()" [disabled]="selected.length >= max">
          {{ selected.length < max ? 'Ajouter une viande...' : 'Limite atteinte' }}
        </button>
        <ul class="dropdown-menu" *ngIf="dropdownOpen">
          <li *ngFor="let v of options" [class.disabled]="selected.includes(v)" (click)="selectViande(v)" [attr.aria-disabled]="selected.includes(v)">
            {{ v }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styles: [`
    .multi-viande-select label { font-weight: 600; color: var(--lk-primary, #b71c1c); margin-bottom: 0.2rem; display: block; }
    .chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem; }
    .chip { background: var(--lk-accent, #ff9800); color: #fff; border-radius: 16px; padding: 0.3rem 0.8rem; display: flex; align-items: center; font-size: 1rem; }
    .chip button { background: none; border: none; color: #fff; margin-left: 0.5em; cursor: pointer; font-size: 1.1em; }
    .dropdown { position: relative; display: inline-block; }
    .dropdown-toggle { border-radius: 25px; border: 1px solid var(--lk-primary, #b71c1c); padding: 0.5rem 1.2rem; font-size: 1rem; background: var(--lk-surface, #f8f8f8); color: var(--lk-text, #222); outline: none; cursor: pointer; transition: border 0.2s; }
    .dropdown-toggle[disabled] { opacity: 0.7; cursor: not-allowed; }
    .dropdown-menu {
      position: absolute;
      left: 0;
      top: 110%;
      z-index: 10;
      background: var(--lk-surface, #f8f8f8); /* Utilise la couleur de fond du thème */
      border: 1px solid var(--lk-primary, #b71c1c);
      border-radius: 8px;
      min-width: 180px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
      margin: 0;
      padding: 0.3rem 0;
      list-style: none;
    }
    .dropdown-menu li {
      padding: 0.5rem 1rem;
      cursor: pointer;
      transition: background 0.2s;
      background: transparent;
    }
    .dropdown-menu li:hover:not(.disabled) {
      background: var(--lk-accent, #ff9800);
      color: #fff;
    }
    .dropdown-menu li.disabled {
      color: #aaa;
      cursor: not-allowed;
      background: transparent;
    }
    .dropdown.open .dropdown-menu { display: block; }
  `]
})
export class MultiViandeSelectComponent implements OnChanges {
  @Input() options: string[] = [];
  @Input() max = 1;
  @Input() label = 'Choix des viandes';
  @Input() selected: string[] = [];
  @Output() selectedChange = new EventEmitter<string[]>();

  dropdownOpen = false;

  ngOnChanges() {
    if (!Array.isArray(this.selected)) {
      this.selected = [];
    }
  }

  toggleDropdown() {
    if (this.selected.length < this.max) {
      this.dropdownOpen = !this.dropdownOpen;
    }
  }

  selectViande(v: string) {
    if (!this.selected.includes(v) && this.selected.length < this.max) {
      this.selected = [...this.selected, v];
      this.selectedChange.emit(this.selected);
      // Ne ferme PAS le menu tant que max non atteint
      if (this.selected.length >= this.max) {
        this.dropdownOpen = false;
      }
    }
  }

  remove(v: string) {
    this.selected = this.selected.filter(x => x !== v);
    this.selectedChange.emit(this.selected);
    // Rouvre le menu si on supprime et qu'on n'est plus au max
    if (this.selected.length < this.max) {
      this.dropdownOpen = true;
    }
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.dropdownOpen = false;
    }
  }
}
