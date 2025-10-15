import { Component } from '@angular/core';
// import { RouterLink } from "../../../../node_modules/@angular/router/router_module.d-BivBj8FC";
import {  RouterOutlet, RouterLink } from '@angular/router';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-sidebar',
  imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  titulo = "Menus";
  routes = routes;
}
