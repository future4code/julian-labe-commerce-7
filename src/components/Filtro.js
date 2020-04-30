import React from 'react';
import styled from 'styled-components';
const FiltroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  width: 100%;
`
const FormContainer = styled.div`
  margin-bottom: 5px;
  width:100%;
`
class Filtro extends React.Component {
  render(){
    return (
      <FiltroContainer>
        <h3>Filtros</h3>
        <FormContainer>
          <label>Valor Mínimo: </label>
          <input type='number' value={this.props.valorMinimo} onChange={this.props.onChangeValorMinimo} placeholder={'R$ 1,00'} />
        </FormContainer>
        <FormContainer>
          <label>Valor Máximo: </label>
          <input type='number' value={this.props.valorMaximo} onChange={this.props.onChangeValorMaximo} placeholder={'R$ 1000,00'} />
        </FormContainer>
        <FormContainer>
          <label>Buscar Produto: </label>
          <input type='text' value={this.props.nome} onChange={this.props.onChangeNome} placeholder={'Informe o produto'} />
        </FormContainer>
      </FiltroContainer>
    );
  }
}
export default Filtro;