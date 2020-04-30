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
outline: 0;
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
      name: "Eu não acredito em humanos",
      value: 39.99,
      imageUrl: "https://i.pinimg.com/originals/cc/f1/08/ccf108502bb418c94a0318df1df288d9.png",
    },
    {
      id: 2,
      name: "Vaza não invada o meu espaço",
      value: 29.99,
      imageUrl: "https://img.elo7.com.br/product/zoom/24D276D/camiseta-camisa-vaza-nao-invade-meu-espaco-nagini.jpg",
    },
    {
      id: 3,
      name: "Marvin",
      value: 69.99,
      imageUrl: "https://img.elo7.com.br/product/zoom/1DADF67/camisa-camiseta-personalizada-desenho-marvin-o-marciano-marvin-el-marciano-cancion.jpg",
    },
    {
      id: 4,
      name: "Star Wars",
      value: 39.99,
      imageUrl: "https://www.montink.com.br/image/cache/data/camisas/camisa-star-wars-icon-590020748e85a-470x668.jpg",
    },
    {
      id: 5,
      name: "Star Trek",
      value: 49.99,
      imageUrl: "https://http2.mlstatic.com/camiseta-raglan-star-trek-vida-longa-e-prospera-jornada-s201-D_NQ_NP_556621-MLB20804138996_072016-F.jpg",
    },
    {
      id: 6,
      name: "Nasa",
      value: 59.99,
      imageUrl: "https://d26lpennugtm8s.cloudfront.net/stores/001/112/372/products/mockup-camiseta-masculina-nasa-ef2a97687469d11df115820756943759-640-0.png",
    },
    {
      id: 7,
      name: "Terapia",
      value: 19.99,
      imageUrl: "https://www.dhresource.com/600x600/f2/albu/g8/M01/38/C5/rBVaV15XepqAP4l6AAT197KQcZ0982.jpg",
    },
    {
      id: 8,
      name: "Thanos",
      value: 49.99,
      imageUrl: "https://http2.mlstatic.com/camisa-camiseta-guerra-infinita-thanos-manopla-do-infinito-D_NQ_NP_775976-MLB27073365891_032018-F.webp",
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

  onChangeOrdenar = (event) => {
    if (event.target.value === 'crescente') {
      const novaLista = [...this.state.listaDeProdutos].sort((a, b) => {
        if (a.value < b.value) return -1
        if (a.value > b.value) return 1
        return 0
      })
      this.setState({ listaDeProdutos: novaLista })
    } else if (event.target.value === 'decrescente') {
      const novaLista = [...this.state.listaDeProdutos].sort((a, b) => {
        if (a.value > b.value) return -1
        if (a.value < b.value) return 1
        return 0
      })
      this.setState({ listaDeProdutos: novaLista })

    }
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
            <select onChange={this.onChangeOrdenar}>
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
