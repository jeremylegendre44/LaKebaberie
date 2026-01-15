import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-coming-soon-card',
  standalone: true,
  templateUrl: './coming-soon-card.component.html',
  styleUrl: './coming-soon-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComingSoonCardComponent {
  readonly note = input.required<string>();
}
