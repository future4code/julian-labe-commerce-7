import React from 'react';
import './App.css';
import car from './img/carrinho_compras.png'
import logo from './img/labenu.png'
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';
import styled from "styled-components";


const Topo = styled.div`
height:50px;
background-color: #000;
`
const Logo = styled.img`
width : 200px;
float:left;
margin-top: 5px;
margin-left: 10px;
`
const DivFiltros = styled.div`
margin-top:20px;
margin-left:15px;
float:left;
height:auto;
width:300px;
border: 1px solid #999;
`
const QuantidadeP = styled.p`
text-align: left;
margin-left:330px;
`
const DivSelect = styled.div`
float:right;
margin-right: 28px;
margin-top: 10px;
`
const ProdutosHome = styled.div`
display: flex;
 flex-direction:row;
 text-align:center;
 justify-content:center;

`
const Footer = styled.div`
width:100%;
position: fixed;
bottom: 0;
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
`

const CarCompras = styled.img`
float:right;
margin-right:20px;
width: 80px;
height: 80px;
cursor:pointer;
`

class App extends React.Component {

  state = {
    listaDeProdutos: [{
      id: 1,
      name: "Foguete da Missão Apollo 11",
      value: 10.0,
      imageUrl: "https://picsum.photos/200/200",
    },
    {
      id: 2,
      name: "Foguete da Missão Space-X",
      value: 4.0,
      imageUrl: "https://picsum.photos/200/200",
    },
    {
      id: 3,
      name: "Foguete da Missão Spotnik",
      value: 3.0,
      imageUrl: "https://picsum.photos/200/200",
    },
    {
      id: 4,
      name: "Foguete da Missão Spotnik 2",
      value: 10000.0,
      imageUrl: "https://picsum.photos/200/200",
    },
    {
      id: 5,
      name: "Foguete da Missão Apollo 11",
      value: 9900.00,
      imageUrl: "https://picsum.photos/200/200",
    },
    {
      id: 6,
      name: "Foguete da Missão Space-X",
      value: 10000.0,
      imageUrl: "https://picsum.photos/200/200",
    },
    {
      id: 7,
      name: "Foguete da Missão Spotnik",
      value: 8000.0,
      imageUrl: "https://picsum.photos/200/200",
    },
    {
      id: 8,
      name: "Foguete da Missão Spotnik 2",
      value: 100.0,
      imageUrl: "https://picsum.photos/200/200",
    }],
    listaDeProdutosCarrinho: [],
    inputValorMaximo: '',
    inputValorMinimo: '',
    inputNome: '',
    carrinho: false
  }

  onChangeValorMinimo = (event) => {
    this.setState({inputValorMinimo: event.target.value});
  }

  onChangeValorMaximo = (event) => {
    this.setState({inputValorMaximo: event.target.value});
  }

  onChangeNome = (event) => {
    this.setState({inputNome: event.target.value});
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

  aumentarQtd = (id) => {
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

  diminuirQtd = (id, qtd) => {
    const novaListaDeProdutos = this.state.listaDeProdutosCarrinho.map((produto) => {
      if (id === produto.id && qtd > 1){
        const alteracao = {
          ...produto,
          qtd: produto.qtd - 1
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

  olharCarrinho = () => {
    this.setState({
      carrinho: !this.state.carrinho
    })
  }

  render(){

    let listaFiltrada = this.state.listaDeProdutos;
    if (this.state.inputValorMinimo !== '') {
      listaFiltrada = listaFiltrada.filter(produto => {
        return produto.value >= this.state.inputValorMinimo;
      })
    }
    if (this.state.inputValorMaximo !== '') {
      listaFiltrada = listaFiltrada.filter(produto => {
        return produto.value <= this.state.inputValorMaximo;
      })
    }
    if (this.state.inputNome !== '') {
      listaFiltrada = listaFiltrada.filter(produto => {
        return produto.name.toLowerCase().includes(this.state.inputNome.toLowerCase());
      })
    }

    const verificaCarrinho = this.state.carrinho

    if(!verificaCarrinho){
      return <div className="App">
        <Topo><Logo src={logo} alt={'Logo'}></Logo>
          <DivSelect>
            <select >
              <option value={'crescente'} >Preço:  Crescente</option>
              <option value={'decrescente'}>Preço:  Decrescente</option>
            </select>
          </DivSelect>
        </Topo>
        <DivFiltros>
        <Filtro
          valorMinimo={this.state.inputValorMinimo}
          valorMaximo={this.state.inputValorMaximo}
          nome={this.state.inputNome}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeValorMinimo={this.onChangeValorMinimo}
          onChangeNome={this.onChangeNome}
        />
        </DivFiltros>

        <ProdutosHome>
        <Home
          listaDeProdutos={listaFiltrada}
          adicionarProduto={this.adicionarProduto}/>
        </ProdutosHome>
        <Footer><CarCompras src={car} alt={'Carrinho de Compras'} onClick={this.olharCarrinho} ></CarCompras></Footer>
        {/* <button onClick={this.olharCarrinho}></button> */}

      </div>
    }return <div className="App">
      <Carrinho
          listaDoCarrinho={this.state.listaDeProdutosCarrinho}
          diminuirQtd={this.diminuirQtd}
          aumentarQtd={this.aumentarQtd}
          removerProduto={this.removerProduto}/>
        <Button onClick={this.olharCarrinho}>Voltar</Button>
    </div>
  }
}

export default App;
