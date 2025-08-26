import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudoRoutingModule } from './estudo-routing-module';
import { Diretivo } from './diretivo/diretivo';


@NgModule({
  declarations: [
    Diretivo
  ],
  imports: [
    CommonModule,
    EstudoRoutingModule
  ]
})
export class EstudoModule { }
