import { Component, Input } from '@angular/core';
import { DataTableComponent } from '../share/data-table/data-table.component';
import { ModalDialogComponent } from "../share/modal-dialog/modal-dialog.component";

@Component({
  selector: 'app-list-expenses',
  imports: [DataTableComponent, ModalDialogComponent],
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
  objeto: object = {};

  public addExpense(dados: any) {
    
    this.rows.push({
      id: this.rows.length + 1,
      name: dados.description,
      amount: dados.value
    });
  }
}
