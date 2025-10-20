import { Component } from '@angular/core';
import { TitleService } from '../services/title.service';

@Component({
  selector: 'app-finance',
  imports: [],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'
})
export class FinanceComponent {
  constructor(private titleService: TitleService) {this.mudarTitulo()}

  mudarTitulo() {
    this.titleService.changeTitle('Finanças');
  }
}
