import React from 'react';

class Carrinho extends React.Component {

    render(){
      const listaDoCarrinho = this.props.listaDoCarrinho.map((produto) => {
        return <div>
          <img src={produto.imageUrl} />
          <p>{produto.name}</p>
          <p>Valor: R$ {produto.value}</p>
          <label for={"quantidade"}>Quantidade: </label>
          <button onClick={() => this.props.diminuirQtd(produto.id, produto.qtd)}>-</button>
          <span>{produto.qtd}</span>
          <button onClick={() => this.props.aumentarQtd(produto.id)}>+</button>
          <button onClick={() => this.props.removerProduto(produto.id)}>Remover</button>
        </div>
      })

      let valorTotal = 0

      const total = this.props.listaDoCarrinho.map((produto) => {
        valorTotal += Number(produto.value) * Number(produto.qtd)
        return Number(valorTotal)
      })
  
      return (
        <div>
             {listaDoCarrinho}
            <p>Total: {valorTotal}</p> 
        </div>
      );
    }
  }
  
  export default Carrinho;