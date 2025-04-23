import { Component, Input } from '@angular/core';
import { DataTableComponent } from '../share/data-table/data-table.component';

@Component({
  selector: 'app-list-expenses',
  imports: [DataTableComponent],
  templateUrl: './list-expenses.component.html',
  styleUrl: './list-expenses.component.scss'
})
export class ListExpensesComponent {
  columns: string[] = ['id', 'name', 'amount']
  rows: any[] = [
    { id: 1, name: 'John Doe', amount: 100 },
    { id: 2, name: 'Jane Doe', amount: 200 },
    { id: 3, name: 'Bob Smith', amount: 300 }
  ]
}
