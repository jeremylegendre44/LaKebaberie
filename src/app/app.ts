import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CartComponent, HeaderComponent } from './shared/components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CartComponent, HeaderComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('LaKebaberie');
}
