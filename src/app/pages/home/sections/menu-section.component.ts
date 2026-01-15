import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { MenuSection } from '../../../shared/models/menu.models';

@Component({
  selector: 'app-menu-section',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './menu-section.component.html',
  styleUrl: './menu-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuSectionComponent {
  readonly section = input.required<MenuSection>();
}
