import React from 'react';
import '../App.css';
import styled from "styled-components";

const Button = styled.button`
border-style: none;
width:100px;
height: 30px;
color: white;
background-color: #000;
text-align:center;
cursor:pointer;
text-transform:uppercase;
border-radius: 10px;
outline: 0;
`

const ButtonSmall = styled.button`
border-style: none;
width:15px;
height:auto;
color: white;
background-color: #000;
cursor:pointer;
`

const DivCarrinho= styled.div`
border: 1px solid #000;
border-radius:10px;
width:450px;
display:flex;
flex-direction:row;
height:auto;
justify-content:center;
align-items:center;
margin:auto;
margin-bottom: 10px;

`
const Imagem = styled.img`
width:100px;
`
const  pName = styled.p`
display:inline-block;
`
const DivDesc = styled.div`
margin:10px;
display:flex;
flex-direction:column;
text-align:left;
`
class Carrinho extends React.Component {

    render(){
      const listaDoCarrinho = this.props.listaDoCarrinho.map((produto) => {
        return <DivCarrinho>
          <Imagem src={produto.imageUrl} />
          <DivDesc>
          <pName>{produto.name}</pName>
          <pName>Valor: R$ {produto.value}</pName>
            <label for={"quantidade"}>Quantidade:<ButtonSmall onClick={() => this.props.diminuirQtd(produto.id, produto.qtd)}>

            -</ButtonSmall><span>{produto.qtd}</span>
              <ButtonSmall onClick={() => this.props.aumentarQtd(produto.id)}>+</ButtonSmall></label>


          </DivDesc>
        <div>
          <Button onClick={() => this.props.removerProduto(produto.id)}>Remover</Button>
          </div>

        </DivCarrinho>
      })

      let valorTotal = 0

      const total = this.props.listaDoCarrinho.map((produto) => {
        valorTotal += Number(produto.value) * Number(produto.qtd)
        return Number(valorTotal)
      })

      return (
      <div className='App'>
             {listaDoCarrinho}

            <p>Total dos Produtos R$: {valorTotal}</p>

      </div>
      );
    }
  }

  export default Carrinho;