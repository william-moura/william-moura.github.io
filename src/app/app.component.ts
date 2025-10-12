import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./share/sidebar/sidebar.component";
import { HeaderTopComponent } from "./share/header-top/header-top.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HeaderTopComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'financas';
}
