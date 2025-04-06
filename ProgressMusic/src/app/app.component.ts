import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { F } from '@angular/router/router_module.d-6zbCxc1T';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,FooterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProgressMusic';
}
