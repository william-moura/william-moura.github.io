import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

}
