import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivrosModule } from './livros/livros-module';
import { ContadorModule } from './contador/contador-module';
import { EstudoModule } from './estudo/estudo-module';

const routes: Routes = [{ path: 'livros', loadChildren: () => import('./livros/livros-module').then(m => m.LivrosModule) },

  { path: 'contador',
    loadChildren: () => import('./contador/contador-module').then(m => m.ContadorModule)
  },
  
  {path: 'estudo', loadChildren: () => import('./estudo/estudo-module').then(m => m.EstudoModule)
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
