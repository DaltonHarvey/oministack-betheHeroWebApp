import React, { Component } from 'react';
import "./style.css";
import logoImg from '../../assets/logo.svg'
import { FiPlus, FiLogOut, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import api from '../../services/index'
class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = { data: [] }

    this.feachDataFromServer = this.feachDataFromServer.bind(this)
    this.getOngName = this.getOngName.bind(this)
    this.getOngId = this.getOngId.bind(this)
  }

  getOngName = ()=>{ return localStorage.getItem('ong'); }

  getOngId = ()=>{ return localStorage.getItem('ongId'); }

  componentDidMount(){
    this.feachDataFromServer();
  }

  feachDataFromServer = async()=>{
    const response = await api.get('/ong/profile', {
      headers: {
        authorization: this.getOngId()
      }
    });

    this.setState({
      data: response.data
    })
  }
  
 
 
  render() {
    return (
      <div className="profile-container">
        <header>
          <img src={logoImg} alt="be the hero" />

          <span>
            {`ONG: ${ this.getOngName() }`}
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
          { this.state.data.map(incident =>(
              <li key={incident.id}>
            <strong>CASO:</strong>
            <p>{incident.title}</p>
            <strong>DESCRICAO</strong>
            <p>{incident.description}</p>
            <div>
              <strong>VALOR:</strong>
              <p>{Intl.NumberFormat('pt-BR',{style:'currency', currency:'MTN'}).format(incident.value)}</p>
            </div>
            <button type="button">
              <FiTrash2 size={20} color="#a8ab3" />
            </button>
          </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Profile;