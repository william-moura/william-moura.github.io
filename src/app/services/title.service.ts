import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  private titleSource = new BehaviorSubject<string>('Home');
  currentTitle = this.titleSource.asObservable();

  constructor() { }
  changeTitle(newTitle: string) {
    this.titleSource.next(newTitle);
  }
}
