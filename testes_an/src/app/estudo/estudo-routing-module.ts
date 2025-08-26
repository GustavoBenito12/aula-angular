import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Diretivo} from './diretivo/diretivo';



const routes: Routes = [
  {path: 'diretivo', component: Diretivo}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudoRoutingModule { }
