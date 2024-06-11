import { AppRoutingModule } from './../app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { TitleComponent } from './title/title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { PictureComponent } from './picture/picture.component';
import { GaleryComponent } from '../galery/galery.component';
import { CardItemComponent } from './card-item/card-item.component';
import { NavComponent } from './nav/nav.component';
import { ModalAdicionarComponent } from './modal-adicionar/modal-adicionar.component';
import {MatLegacyCardModule as MatCardModule} from '@angular/material/legacy-card';
import {MatLegacyInputModule as MatInputModule} from '@angular/material/legacy-input';
import {MatLegacyFormFieldModule as MatFormFieldModule} from '@angular/material/legacy-form-field';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TitleComponent,
    NavbarComponent,
    FooterComponent,
    PictureComponent,
    GaleryComponent,
    CardItemComponent,
    NavComponent,
    ModalAdicionarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  exports: [
    TitleComponent,
    NavbarComponent,
    FooterComponent,
    GaleryComponent,
    CardItemComponent,
    NavComponent,
    ModalAdicionarComponent
  ],
})
export class SharedModule { }
