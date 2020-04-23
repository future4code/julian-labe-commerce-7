import React from 'react';

class Carrinho extends React.Component {

  state = {
    listaDeProdutos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
        carrinho: false
      },
      {
        id: 2,
        name: "Foguete da Missão Apollo 11",
        value: 150.0,
        imageUrl: "https://picsum.photos/200/200",
        carrinho: false
      }
    ],
    listaDeProdutosCarrinho: [],
    inputQuantidade: ''
  }

  adicionarProduto = (id, name, value, imageUrl) => {

    const listaDeProdutosClicada = {
      id: id,
      name: name,
      value: value,
      imageUrl: imageUrl,
      qtd: 1
    }

    const novaListaDeProdutos = this.state.listaDeProdutos.map((produto) => {
      if (produto.id === id){
        const alteracao = {
          ...produto,
          carrinho: true
        }
        return alteracao
      }else{
        return produto
      }
    })
    
    const novaListaDeProdutosCarrinho = [...this.state.listaDeProdutosCarrinho, listaDeProdutosClicada]

    this.setState({
      listaDeProdutos: novaListaDeProdutos,
      listaDeProdutosCarrinho: novaListaDeProdutosCarrinho
    })
  }

  adicionarQuantidade = (id) => {
    const novaListaDeProdutos = this.state.listaDeProdutosCarrinho.map((produto) => {
      if (id === produto.id){
        const alteracao = {
          ...produto,
          qtd: produto.qtd + 1
        }
        return alteracao
      }else{
        return produto
      }
    })

    this.setState({
      listaDeProdutosCarrinho: novaListaDeProdutos
    })
  }

  removerProduto = (id) => {
    if(window.confirm("Tem certeza que deseja remover?")){
      const novaListaDeProdutosCarrinho = this.state.listaDeProdutosCarrinho.filter((produto) => {
        return id !== produto.id
      })

      const novaListaDeProdutos = this.state.listaDeProdutos.map((produto) => {
        if (produto.id === id){
          const alteracao = {
            ...produto,
            carrinho: false
          }
          return alteracao
        }else{
          return produto
        }
      })

      this.setState({
        listaDeProdutos: novaListaDeProdutos,
        listaDeProdutosCarrinho: novaListaDeProdutosCarrinho
      })
    }
  }
    render(){

      const listaDeProdutos = this.state.listaDeProdutos.map((produto) => {
        if(!produto.carrinho){
          return <div>
          <img src={produto.imageUrl} />
          <p>{produto.name}</p>
          <p>Valor: R$ {produto.value}</p>
          <button onClick={() => this.adicionarProduto(produto.id, produto.name, produto.value, produto.imageUrl)}>Adicionar produto</button>
        </div>
        }
        return <div>
        <img src={produto.imageUrl} />
        <p>{produto.name}</p>
        <p>Valor: R$ {produto.value}</p>
        <button onClick={() => this.adicionarQuantidade(produto.id)}>adicionar quantidade</button>
      </div>
        
      })

      const listaDoCarrinho = this.state.listaDeProdutosCarrinho.map((produto) => {
        return <div>
          <img src={produto.imageUrl} />
          <p>{produto.name}</p>
          <p>Valor: R$ {produto.value}</p>
          <label for={"quantidade"}>Quantidade: </label>
          <input type="number" value={produto.qtd}></input>
          <button onClick={() => this.removerProduto(produto.id)}>Remover</button>
        </div>
      })

      let valorTotal = 0

      const total = this.state.listaDeProdutosCarrinho.map((produto) => {
        valorTotal += Number(produto.value) * Number(produto.qtd)
        return Number(valorTotal)
      })
  
      return (
        <div>
            {listaDeProdutos}
            {listaDoCarrinho}
            <p>{valorTotal}</p>
        </div>
      );
    }
  }
  
  export default Carrinho;