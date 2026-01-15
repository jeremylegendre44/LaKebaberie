import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { PricingHighlight } from '../../../shared/models/menu.models';

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pricing-section.component.html',
  styleUrl: './pricing-section.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PricingSectionComponent {
  readonly items = input.required<readonly PricingHighlight[]>();
}
