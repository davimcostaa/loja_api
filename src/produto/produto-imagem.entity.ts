import { Entity, Column } from 'typeorm'

@Entity({name: "produto_imagens"})
export class ImagemProduto {

    @Column({name: "url", length: 200, nullable: false})
    url: string;

    @Column({name: "descricao", length: 200, nullable: false})
    descricao: string;
  }