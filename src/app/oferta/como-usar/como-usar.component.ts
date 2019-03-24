import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import { OfertasService } from 'src/app/ofertas.service';


@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [OfertasService]
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: string=""

  constructor(
    private route: ActivatedRoute, 
    public ofertasService: OfertasService
    ) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametro: Params)=>{
      this.ofertasService.getComoUsarOfertaPorId(parametro.id)
    .then((resposta: string)=> {
      this.comoUsar = resposta
    })
    })

    
  }

}
