import { Component } from "@angular/core";

@Component({
	selector: "app-lista-produtos",
	standalone: false,
	templateUrl: "./lista-produtos.html",
	styleUrl: "./lista-produtos.css",
})
export class ListaProdutos {
	products = [
		{ id: 1, name: "Product A", price: 100 },
		{ id: 2, name: "Product B", price: 150 },
		{ id: 3, name: "Product C", price: 200 },
	];
}
