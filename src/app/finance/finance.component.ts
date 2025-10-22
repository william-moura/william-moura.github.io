import { Component, Input, input } from '@angular/core';
import { TitleService } from '../services/title.service';
import { FinanceService } from '../services/finance.service';
import { DataTableComponent } from '../share/data-table/data-table.component';

@Component({
  selector: 'app-finance',
  imports: [DataTableComponent],
  templateUrl: './finance.component.html',
  styleUrl: './finance.component.scss'
})
export class FinanceComponent {
  @Input() headers: string[];
  constructor(private titleService: TitleService, private financeService: FinanceService) {
    this.mudarTitulo();
    this.headers = [];
  }

  mudarTitulo() {
    this.titleService.changeTitle('Finanças');
    this.financeService.getExpenses().subscribe(data => {
      console.log(data);
    });
  }
}
