import { Component, Input } from '@angular/core';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-header-top',
  imports: [],
  templateUrl: './header-top.component.html',
  styleUrl: './header-top.component.scss'
})
export class HeaderTopComponent {
  @Input() profileImageUrl: string = 'assets/default-profile.png';
  titleAtual = '';

  constructor(private titleService: TitleService) {}

  ngOnInit() {
    this.titleService.currentTitle.subscribe(title => (this.titleAtual = title));
  }
}
