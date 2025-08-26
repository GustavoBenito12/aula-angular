import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  standalone: false,
  templateUrl: './cadastrar.html',
  styleUrl: './cadastrar.css'
})
export class Cadastrar {
 nome = 'Gustavo';
 caminhoimagem = '';
 dizerOi(){
  this.nome = 'ola pessoal'
 }
 listaItens = ['maça', 'laranja'];

 mostrarMensagem=false

 isDestaque = true;
 hasError = false;

 toggleMensagem(){
  this.mostrarMensagem = !this.mostrarMensagem;
 }
}
