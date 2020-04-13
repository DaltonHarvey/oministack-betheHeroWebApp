import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from '../../services/index';
import './style.css';

class NewIncidente extends Component {

  constructor(props) {
    super(props);

    this.state = {
      titulo: '',
      descricao: '',
      valor: ''
    }

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange(event) {
    const { name } = event.target;

    this.setState({
      [name]: event.target.value
    })

  }

  handleSubmit = async(event)=>{
    event.preventDefault();

    const incidente = {
      title: this.state.titulo, 
      description: this.state.descricao,
      value: this.state.valor
    }

    const response = await api.post('incidente', incidente, {
      headers : {
        authorization: localStorage.getItem('ongId')
      }
    });

    console.log(response);

    this.props.history.push('/profile');
  }



  render() {
    return (
      <div className="incidente-container">
        <div className="container">
          <section>
            <img src={ logoImg } alt="Be the hero" />
            <h1>Cadastro</h1>
            <p>Descreve o caso detalhadamente para encontrar um heroi para resolver.</p>
            <Link className="back-button" to="/profile">
              <FiArrowLeft />
            Voltar
          </Link>
          </section>
          <form onSubmit={ this.handleSubmit }>
            <input type="text" placeholder="Titulo do caso"name = "titulo" value = { this.state.titulo } onChange = { this.handleOnChange }/>
            <textarea placeholder="Descricao" name = "descricao" value={ this.state.descricao } onChange={ this.handleOnChange } />
            <input placeholder="Valor" name= "valor" value={ this.state.valor } onChange={ this.handleOnChange } />
            <button className="button-submit" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    )
  }
}

export default NewIncidente;