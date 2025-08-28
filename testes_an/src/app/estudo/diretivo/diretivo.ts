import { Component } from '@angular/core';




@Component({
  selector: 'app-diretivo',
  standalone: false,
  templateUrl: './diretivo.html',
  styleUrl: './diretivo.css'
})
export class Diretivo {
  alunos = [
    { id: 123, nome: 'Thiago', ativo: true },
    { id: 234, nome: 'Roberto', ativo: false },
    { id: 345, nome: 'Mariana', ativo: true }
  ];

  mostrarLista = true;
  fontSize = 16;

  toggleLista() {
    this.mostrarLista = !this.mostrarLista;
  }

  aumentarFonte() {
    this.fontSize += 2;
  }

  diminuirFonte() {
    if (this.fontSize > 8) {
      this.fontSize -= 2;
    }
  }



}
