import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MoneyPipe } from '../../money.pipe';

@Component({
  selector: 'app-modal-dialog',
  imports: [ReactiveFormsModule, FormsModule, MoneyPipe],
  standalone: true,
  templateUrl: './modal-dialog.component.html',
  styleUrl: './modal-dialog.component.scss'
})
export class ModalDialogComponent {
  @Output() dadosEnviados = new EventEmitter<any>();
  formModel :any = {
    description: '',
    value: '',
    dueDate: ''
  }
  public addExpense() {
    this.dadosEnviados.emit(this.formModel);
    this.formModel = {
      description: '',
      value: '',
      dueDate: ''
    }
  }
}
