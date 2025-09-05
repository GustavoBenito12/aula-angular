import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LivrosModule } from "./livros/livros-module";
import { ContadorModule } from "./contador/contador-module";
import { EstudoModule } from "./estudo/estudo-module";
import { ProdutosModule } from "./produtos/produtos-module";
import { SharedModule } from "./shared/shared-module";
const routes: Routes = [
	{
		path: "livros",
		loadChildren: () =>
			import("./livros/livros-module").then((m) => m.LivrosModule),
	},

	{
		path: "contador",
		loadChildren: () =>
			import("./contador/contador-module").then((m) => m.ContadorModule),
	},

	{
		path: "estudo",
		loadChildren: () =>
			import("./estudo/estudo-module").then((m) => m.EstudoModule),
	},
	{
		path: "produtos",
		loadChildren: () =>
			import("./produtos/produtos-module").then((m) => m.ProdutosModule),
	},
	{
		path: "shared",
		loadChildren: () =>
			import("./shared/shared-module").then((m) => m.SharedModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
