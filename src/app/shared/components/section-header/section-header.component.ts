import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionHeaderComponent {
  readonly title = input.required<string>();
  readonly subtitle = input<string>();
}
