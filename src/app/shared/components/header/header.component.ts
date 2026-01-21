import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';
import { Observable } from 'rxjs';

export interface NavLink {
  readonly label: string;
  readonly href: string;
  readonly isCta?: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  @Input() brandName = 'La Kebaberie';
  @Input() brandCity?: string;
  @Input() navLinks: readonly NavLink[] = [];

  readonly theme$: Observable<boolean>;

  constructor(private readonly theme: ThemeService) {
    this.theme$ = this.theme.theme$;
    this.theme.initFromStorage();
  }

  toggleTheme() {
    this.theme.toggle();
  }
}
