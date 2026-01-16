import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ChoiceOption } from '../../../shared/models';

@Component({
  selector: 'app-choices-section',
  standalone: true,
  templateUrl: './choices-section.component.html',
  styleUrls: ['./choices-section.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChoicesSectionComponent {
  readonly choices = input.required<readonly ChoiceOption[]>();
}
