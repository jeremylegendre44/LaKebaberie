import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  readonly brandName = input.required<string>();
  readonly city = input<string>();
  readonly year = input.required<number>();
  readonly rightText = input<string>();
}
