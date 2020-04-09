import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'
import { FiLogIn } from 'react-icons/fi';
import api from '../../services'
import './style.css';


class Logon extends Component {

  state = {
    Id: ''
  }

  setId = event => {
    const { name } = event.target;
    this.setState({[name]: event.target.value})
  }

  handleSubmit = async(event) => {
    
    event.preventDefault();
   
    const Id = this.state.Id;

    try {
      const response = await api.post('session', { Id });

      localStorage.setItem('ongId', Id );
      localStorage.setItem('ong', response.data.name );

      this.props.history.push('/profile');
      
    } catch (error) {
      alert(error);
    }
    
  }

  render() {
  return (
    <div className="logon-conteiner">
      <section className="form">
        <img src={ logoImg } alt="Be the hero" />
        <form onSubmit= { this.handleSubmit }>
          <h1>Wellcome Back</h1>
          <p>
            To keep connected with us please login with your
            ong ID
          </p>
          <input name = "Id" value={ this.state.Id } onChange={ this.setId } style={{ width: "60%" }} placeholder="Ong ID" />
          <button className="button-submit" style={{width: "110px"}} type="submit">Get Started</button>

          <Link className="back-button" to="/register">
            <span>
              <FiLogIn />
            </span>
            
            Registe your Ong
          </Link>
        </form>
      </section>
      <img src={ heroesImg } alt="heros" />
    </div>

  );
  }
}

export default Logon;