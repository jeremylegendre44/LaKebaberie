import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly isCta?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  readonly brandName = input.required<string>();
  readonly brandCity = input<string>();
  readonly navLinks = input<readonly NavLink[]>([]);
}
