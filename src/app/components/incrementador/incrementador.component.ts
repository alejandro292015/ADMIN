import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
    this.clases = `btn ${this.clases}` // valor inicial del boton
  }
 @Input('valor') progreso: number = 0 // valor inicial del progreso
 @Input('clase') clases: string = 'btn btn-primary' // valor inicial que llega del padre
 @Output() valorSalida: EventEmitter<number> = new EventEmitter; // se emite el valor numerico que obtiene el padre (variable)='valor'
  get porcentaje(){
    return `${this.progreso}%`
  }
 
  cambioDeValor(valor:number){
    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100)  // valores que se emiten para llegar al padre
      return this.progreso = 100
     }
     if(this.progreso <= 0 && valor < 0){
      this.valorSalida.emit(0) // valores que se emiten para llegar al padre
 
       return this.progreso = 0
      }
      
     this.progreso = this.progreso + valor
     this.valorSalida.emit(this.progreso) // valores que se emiten para llegar al padre

 
  }
  onChages( valor:number ){

    if(valor >= 100 ){
      this.progreso = 100
    }else if(valor <= 0){
      this.progreso = 0

    }else{
      this.progreso = valor
    }
    
    this.valorSalida.emit(valor)
  }
}
