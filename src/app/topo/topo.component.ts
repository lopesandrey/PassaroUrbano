import { Component, OnInit } from '@angular/core';
import {OfertasService} from '../ofertas.service'
import { Observable, Subject } from 'rxjs';

import 'rxjs/add/operator/switchMap'

import {Oferta} from '../shared/oferta.model'

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {
 
  public ofertas: Observable<Oferta[]>

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno de ofertas[]
    .debounceTime(1000)
    .distinctUntilChanged()
      .switchMap((termo: string) => {
        if (termo.trim() === '') {
          //retornar um observable de array de ofertas vazio
          return Observable.of<Oferta[]>([])
        }

        return this.ofertasService.pesquisaOfertas(termo)
      })
      .catch((err: any) => {
        return Observable.of<Oferta[]>([])
      })
      
  }

  public pesquisa(termoDaPesquisa: string): void {
    this.subjectPesquisa.next(termoDaPesquisa)
    
  }
  public limpaPesquisa(): void {
    this.subjectPesquisa.next('')
  }
}
