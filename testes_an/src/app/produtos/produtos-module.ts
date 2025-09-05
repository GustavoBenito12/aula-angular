import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProdutosRoutingModule } from "./produtos-routing-module";
import { Estoque } from "./estoque/estoque";
import { ListaProdutos } from "./lista-produtos/lista-produtos";
import { SharedModule } from "../shared/shared-module";
@NgModule({
	declarations: [Estoque, ListaProdutos],
	imports: [CommonModule, ProdutosRoutingModule, SharedModule],
	exports: [Estoque, ListaProdutos],
})
export class ProdutosModule {}
