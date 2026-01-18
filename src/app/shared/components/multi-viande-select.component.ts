import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
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
      <select [disabled]="selected.length >= max" (change)="onSelect($event)" [value]="''">
        <option value="" disabled>Ajouter une viande...</option>
        <option *ngFor="let v of options" [value]="v" [disabled]="selected.includes(v)">{{ v }}</option>
      </select>
    </div>
  `,
  styles: [`
    .multi-viande-select label { font-weight: 600; color: var(--lk-primary, #b71c1c); margin-bottom: 0.2rem; display: block; }
    .chips { display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 0.5rem; }
    .chip { background: var(--lk-accent, #ff9800); color: #fff; border-radius: 16px; padding: 0.3rem 0.8rem; display: flex; align-items: center; font-size: 1rem; }
    .chip button { background: none; border: none; color: #fff; margin-left: 0.5em; cursor: pointer; font-size: 1.1em; }
    select { border-radius: 25px; border: 1px solid var(--lk-primary, #b71c1c); padding: 0.5rem 1.2rem; font-size: 1rem; background: var(--lk-surface, #f8f8f8); color: var(--lk-text, #222); outline: none; transition: border 0.2s; }
    select:disabled { opacity: 0.7; }
  `]
})
export class MultiViandeSelectComponent implements OnChanges {
  @Input() options: string[] = [];
  @Input() max = 1;
  @Input() label = 'Choix des viandes';
  @Input() selected: string[] = [];
  @Output() selectedChange = new EventEmitter<string[]>();

  ngOnChanges() {
    // S'assure que selected est toujours un tableau (évite les erreurs si on passe null)
    if (!Array.isArray(this.selected)) {
      this.selected = [];
    }
  }

  onSelect(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    if (value && !this.selected.includes(value) && this.selected.length < this.max) {
      this.selected = [...this.selected, value];
      this.selectedChange.emit(this.selected);
    }
    (event.target as HTMLSelectElement).value = '';
  }

  remove(v: string) {
    this.selected = this.selected.filter(x => x !== v);
    this.selectedChange.emit(this.selected);
  }
}
