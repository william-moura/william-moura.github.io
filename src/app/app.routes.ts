import { Routes } from '@angular/router';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';

export const routes: Routes = [
    { path: 'list-expenses', component: ListExpensesComponent, title: 'Despesas' }
];
