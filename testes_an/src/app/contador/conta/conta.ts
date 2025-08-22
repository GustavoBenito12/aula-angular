import { Component } from '@angular/core';

@Component({
  selector: 'app-conta',
  standalone: false,
  templateUrl: './conta.html',
  styleUrl: './conta.css'
})
export class Conta {
valor: number = 0 ;

incrementar(){
  this.valor++
}
decrementar(){
  this.valor--;
}
}
