import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {
  
  @Input() public idPedidoCompra: number
  
  constructor() { }

  ngOnInit() {
  }

 

}
