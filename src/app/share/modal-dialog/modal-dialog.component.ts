import { CommonModule } from '@angular/common';
import { Component, EventEmitter, output, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-dialog',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './modal-dialog.component.html',
  styleUrl: './modal-dialog.component.scss'
})
export class ModalDialogComponent {
  // formModel = new FormControl('');
  eventEmitter = new EventEmitter()
  @Output() formModel :any = {
    description: new FormControl(''),
    value: new FormControl(''),
    dueDate: new FormControl('')
  }
  public addExpense() {
    console.log(this.formModel,'Adicionar despesa');
    this.eventEmitter.emit(this.formModel);
  }
}
