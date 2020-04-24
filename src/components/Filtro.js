import React from 'react';
import styled from 'styled-components';
const FiltroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: .5em;
  width: 20%;
`
const FormContainer = styled.div`
  margin: .5em 0;
`
class Filtro extends React.Component {
  render(){
    return (
      <FiltroContainer>
        <h3>Filtros</h3>
        <FormContainer>
          <label>Valor Mínimo: </label>
          <input type='number' value={this.props.valorMinimo} onChange={this.props.onChangeValorMinimo} />
        </FormContainer>
        <FormContainer>
          <label>Valor Máximo: </label>
          <input type='number' value={this.props.valorMaximo} onChange={this.props.onChangeValorMaximo} />
        </FormContainer>
        <FormContainer>
          <label>Buscar Produto: </label>
          <input type='text' value={this.props.nome} onChange={this.props.onChangeNome} />
        </FormContainer>
      </FiltroContainer>
    );
  }
}
export default Filtro;