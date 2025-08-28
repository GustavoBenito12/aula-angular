import { Component } from '@angular/core';

@Component({
  selector: 'app-estoque',
  standalone: false,
  templateUrl: './estoque.html',
  styleUrl: './estoque.css'
})
export class Estoque {
   produtos = [
    { id: 1, nome: 'Smartphone Samsung', preco: 1800, estoque: 5 },
    { id: 2, nome: 'Notebook Dell', preco: 2500, estoque: 0 },
    { id: 3, nome: 'Smart TV 55"', preco: 2200, estoque: 3 },
    { id: 4, nome: 'Tablet iPad', preco: 1500, estoque: 0 },
    { id: 5, nome: 'Headphone Sony', preco: 800, estoque: 8 },
    { id: 6, nome: 'Console PlayStation', preco: 3000, estoque: 2 }
  ];

  aumentarPrecos() {
    this.produtos.forEach(produto => {
      produto.preco = produto.preco * 1.1;
    });
  }

  diminuirPrecos() {
    this.produtos.forEach(produto => {
      produto.preco = produto.preco * 0.9;
    });
  }

  getClasseDisponibilidade(estoque: number) {
    return estoque > 0 ? 'disponivel' : 'indisponivel';
  }

  getCorPreco(preco: number) {
    return preco > 2000 ? 'blue' : 'black';
  }
}

