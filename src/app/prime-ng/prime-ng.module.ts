import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule} from 'primeng/card'
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';


@NgModule({
  exports:[
    MenubarModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
