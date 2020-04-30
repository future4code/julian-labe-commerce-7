import React from 'react';
import styled from "styled-components";

const ProdutosHome = styled.div`
 display: flex;
 flex-direction:row;
 flex-wrap:wrap;
text-align:center;
margin-top: 10px;
`
const Imagem = styled.img`
width: 200px;
height: 250px;
margin: 5px;
border-radius: 5px;
`
const DivProdutos = styled.div`
border:1px dotted #999;
margin:10px;
width:250px;
`
const Button = styled.button`
border-style: none;
width:180px;
height: 40px;
color: white;
background-color: #000;
margin-bottom: 5px;
cursor:pointer;
text-transform:uppercase;
border-radius: 10px;
outline: 0;
`
export class Home extends React.Component {


    render(){

      const novaListaDeProdutos = this.props.listaDeProdutos.map((produto) => {
        if(!produto.carrinho){
          return <DivProdutos>
            <Imagem src={produto.imageUrl} />
            <p>{produto.name}</p>
            <p>Valor: R$ {produto.value}</p>
            <Button onClick={() => this.props.adicionarProduto(produto.id, produto.name, produto.value, produto.imageUrl)}>Adicionar Carrinho</Button>
          </DivProdutos>
        }
        return <DivProdutos>
            <Imagem src={produto.imageUrl} />
            <p>{produto.name}</p>
            <p>Valor: R$ {produto.value}</p>
            <Button disabled>Já está no carrinho</Button>
          </DivProdutos>
      })
      return <ProdutosHome> {novaListaDeProdutos} </ProdutosHome>
  }
}
export default Home