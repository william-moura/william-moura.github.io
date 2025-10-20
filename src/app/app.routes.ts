import { Routes } from '@angular/router';
import { ListExpensesComponent } from './list-expenses/list-expenses.component';
import { FinanceComponent } from './finance/finance.component';

export const routes: Routes = [
    { path: 'list-expenses', component: ListExpensesComponent, title: 'Despesas' },
    { path: 'finances', component: FinanceComponent, title: 'Finanças' }
];
