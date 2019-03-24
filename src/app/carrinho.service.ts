import { ItemCarrinho } from './shared/item-carrinho.model'
import { Oferta } from './shared/oferta.model';


export class CarrinhoService {
    public itens: ItemCarrinho[] = [] 

    public exibirItens(): ItemCarrinho[] {
        return this.itens
    }

    public incluirItem(oferta: Oferta): void {
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )
        //verfica se o item ja existe 
        
        let itemEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id)
        
        if(itemEncontrado) {
            itemEncontrado.quantidade += 1 
        } else {
            this.itens.push(itemCarrinho)
        }
        
        
    }

    public totalCompras(): number {
        let total: number = 0

        this.itens.map((item: ItemCarrinho) => {
            total = total + (item.valor * item.quantidade)
        })
        return total
    }

    public adicionarQtd(itemCarrinho: ItemCarrinho): void {
        // incrementar quantidade
        let itemEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id)
        if (itemCarrinho){
            itemEncontrado.quantidade += 1
        }
    }
    public removeQtd(itemCarrinho: ItemCarrinho): void {
        // decrementar quantidade
        let itemEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id)
        if (itemCarrinho){

            itemEncontrado.quantidade -= 1
            if (itemEncontrado.quantidade === 0) {
                this.itens.splice(this.itens.indexOf(itemEncontrado),1)
            }
        }
    }
    public excluir(itemCarrinho: ItemCarrinho): void {
        let itemEncontrado = this.itens.find((item: ItemCarrinho)=> item.id === itemCarrinho.id)
         this.itens.splice(this.itens.indexOf(itemEncontrado),1)
    }

    public limparCarrinho(): void {
        this.itens = []
    }
}


