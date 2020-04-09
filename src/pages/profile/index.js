import React, { Component } from 'react';
import "./style.css";
import logoImg from '../../assets/logo.svg'
import { FiPlus, FiLogOut, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

class Profile extends Component {

  constructor(props){
    super(props);

    this.state = {
      data: []
    }
  }
 
  render() {
    let ongName = localStorage.getItem('ong');
    return (
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="be the hero" />

          <span>
            {`ONG: ${ongName}`}
        </span>

          <div className="header-right">
            <div className="add-button">
              <Link to="/incidente/new">
                <FiPlus size="20" />
              </Link>
            </div>

            <div className="add-button">
              <Link to="/">
                <FiLogOut size="20" />
              </Link>
            </div>
          </div>

        </header>

        <h1>
          Casos cadastrados
      </h1>

        <ul>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>DESCRICAO</strong>
            <p>Descricao teste</p>
            <div>
              <strong>VALOR:</strong>
              <p>R$ 120, 00</p>
            </div>
            <button type="button">
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>

          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>DESCRICAO</strong>
            <p>Curiously, a lot of effort has been invested into the critical thinking. Remembering that the possibility of achieving the progress of the structured technology analysis, as far as the systems approach is questionable, benefits from permanent interrelation with The Implementation of Eligible Result" </p>
            <div>
              <strong>VALOR:</strong>
              <p>R$ 120, 00</p>
            </div>
            <button type="button">
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>DESCRICAO</strong>
            <p>Descricao teste</p>
            <div>
              <strong>VALOR:</strong>
              <p>R$ 120, 00</p>
            </div>
            <button type="button">
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>DESCRICAO</strong>
            <p>Descricao teste</p>
            <div>
              <strong>VALOR:</strong>
              <p>R$ 120, 00</p>
            </div>
            <button type="button">
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>DESCRICAO</strong>
            <p>Descricao teste</p>
            <div>
              <strong>VALOR:</strong>
              <p>R$ 120, 00</p>
            </div>
            <button type="button">
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>DESCRICAO</strong>
            <p>Descricao teste</p>
            <div>
              <strong>VALOR:</strong>
              <p>R$ 120, 00</p>
            </div>
            <button type="button">
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>DESCRICAO</strong>
            <p>Descricao teste</p>
            <div>
              <strong>VALOR:</strong>
              <p>R$ 120, 00</p>
            </div>
            <button type="button">
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>DESCRICAO</strong>
            <p>Descricao teste</p>
            <div>
              <strong>VALOR:</strong>
              <p>R$ 120, 00</p>
            </div>
            <button type="button">
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>DESCRICAO</strong>
            <p>Descricao teste</p>
            <div>
              <strong>VALOR:</strong>
              <p>R$ 120, 00</p>
            </div>
            <button type="button">
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>
          <li>
            <strong>CASO:</strong>
            <p>Caso teste</p>
            <strong>DESCRICAO</strong>
            <p>Descricao teste</p>
            <div>
              <strong>VALOR:</strong>
              <p>R$ 120, 00</p>
            </div>

            <button type="button">
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Profile;