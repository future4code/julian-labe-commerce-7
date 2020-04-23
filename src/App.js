import React from 'react';
import './App.css';
import Home from './components/Home';
import Carrinho from './components/Carrinho';
import Filtro from './components/Filtro';

class App extends React.Component {

  state = {
    listaDeProdutos: [],
    listaDeProdutosCarrinho: [],
    inputValorMaximo: '',
    inputValorMinimo: '',
    inputNome: ''
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

  render(){

    return (
      <div className="App">
        <Home />
        <Carrinho />
        <Filtro />
      </div>
    );
  }
}

export default App;
