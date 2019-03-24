import { Oferta } from './shared/oferta.model'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { URL_API } from './app.api'
import { Observable } from 'rxjs';



@Injectable()
export class OfertasService {

    //private url_api ="http://localhost:3000/ofertas"

    constructor (private http: HttpClient) {}


    public getOfertas(): Promise<Oferta[]> {
        //efetuar uma requisição http
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
        .toPromise()
        .then((resposta: any) => resposta)
        //retornar um promise Oferta[]
        
    }
    public getOfertasPorCategoria(categoria: string) : Promise<Oferta[]> {
        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta)
    }

    public getOfertaPorId(id: number): Promise<Oferta>{
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0]
        })
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }
    public getOndeFicaOfertaPorId(id: number): Promise<string>{
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta[0].descricao
        })
    }
    public pesquisaOfertas(termo: string): Observable<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)        
        .retry(10)    
        .map((resposta: any) => resposta)
    }













   /* public ofertas: Oferta[] = [
        
            {
                id: 1,
                categoria: "restaurante",
                titulo: "Super Burger ",
                descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
                anunciante: "Original Burger",
                valor: 29.90,
                destaque: true,
                imagens: [
                    {url: "/assets/ofertas/1/img1.jpg"},
                    {url: "/assets/ofertas/1/img2.jpg"},
                    {url: "/assets/ofertas/1/img3.jpg"},
                    {url: "/assets/ofertas/1/img4.jpg"}
                ]
            },
            {
                id: 2,
                categoria: "restaurante",
                titulo: "Cozinha Mexicana",
                descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
                anunciante: "Mexicana",
                valor: 32.90,
                destaque: true,
                imagens: [
                    {url: "/assets/ofertas/2/img1.jpg"},
                    {url: "/assets/ofertas/2/img2.jpg"},
                    {url: "/assets/ofertas/2/img3.jpg"},
                    {url: "/assets/ofertas/2/img4.jpg"}
                ]
            
            },
            {
                id: 4,
                categoria: "diversao",
                titulo: "Estância das águas",
                descricao_oferta: "Diversão garantida com piscinas, trilhas e muito mais.",
                anunciante: "Estância das águas",
                valor: 31.90,
                destaque: true,
                imagens: [
                    {url: "/assets/ofertas/3/img1.jpg"},
                    {url: "/assets/ofertas/3/img2.jpg"},
                    {url: "/assets/ofertas/3/img3.jpg"},
                    {url: "/assets/ofertas/3/img4.jpg"},
                    {url: "/assets/ofertas/3/img5.jpg"},
                    {url: "/assets/ofertas/3/img6.jpg"}
                ]
            }
        ]
    


    public getOfertas(): Oferta[] {
        return this.ofertas
    }

    public getOferta2(): Promise<Oferta[]>{
        return new Promise((resolve, reject) =>{
            //algum tipo de processamento , ao finalizar, chama a função resove ou reject
            //console.log("passou")
            let deu_certo = true

            if(deu_certo) {
                setTimeout(() => resolve(this.ofertas), 3000)
                
            } else {
                reject({ codigo_erro: 404 , mensagem_erro: 'Servidor não encontrado xyx' })
            }
            
        })

        .then((ofertas: Oferta[]) => {
            console.log("primeiro then")
            return ofertas
        })
        .then(( ofertas: Oferta[] ) =>{
            console.log('segundo then')
            return new Promise(( resolve2 , reject2 ) => {
                setTimeout(() => { resolve2( ofertas ) } ,3000)
            })
        } )
        .then(( ofertas: Oferta[] ) => {
            console.log('terceiro then executado apos 3 segundos  aguardando uma promisse ser revolvida')
            return ofertas
        })
    }*/
}