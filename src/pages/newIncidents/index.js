import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import './style.css';

class NewIncidente extends Component {

  render() {
    return (
      <div className="incidente-container">
        <div className="container">
          <section>
            <img src={logoImg} alt="Be the hero" />
            <h1>Cadastro</h1>
            <p>Descreve o caso detalhadamente para encontrar um heroi para resolver.</p>
            <Link className="back-button" to="/profile">
              <FiArrowLeft />
            Voltar
          </Link>
          </section>
          <form action="">
            <input type="text" placeholder="Titulo do caso" />
            <textarea placeholder="Descricao" />
            <input placeholder="Valor" />
            <button className="button-submit" type="submit">Cadastrar</button>

          </form>
        </div>
      </div>
    )
  }
}

export default NewIncidente;