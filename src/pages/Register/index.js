import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import api from "../../services/index";
import "./style.css";

export default class Register extends Component {



  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      whatsApp: '',
      uf: '',
      city: ''
    }

    this.handleChange =  this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleChange = (event)=>{
    const { name }  = event.target;
 
    this.setState({[name]: event.target.value})
  }

  handleSubmit  = async(event) => {
    event.preventDefault();

    const ong = {
      name: this.state.name,
      whatsapp: this.state.whatsApp,
      email: this.state.email ,
      city: this.state.city,
      uf: this.state.uf
    };
    try {
      const response = await api.post("ong",ong);

      alert(`Your NGO number is ${response.data.ongNumber}`);

      this.props.history.push('/');

    } catch (error) {
      alert(error)
    }
    
  }

  render() {
    return (
      <div className="register-conteiner">
        <div className="container">
          <section>
            <img src={logoImg} alt="Be the hero" />
            <h1>Cadastro</h1>
            <p>Faca o seu cadastro, entre na plataforma</p>
            <p>e ajude pessoas a encontrarem os cados da sua ONG</p>
            <Link className="back-button" to="/">
              <FiArrowLeft />
            Voltar
          </Link>
          </section>

          <form onSubmit= { this.handleSubmit } >

            <input  type="text" name="name" value={ this.state.name} onChange= { this.handleChange } placeholder="Nome da ONG" />
           
            <input type="email" name="email" value={ this.state.email} onChange= { this.handleChange } placeholder="E-mail" />

            <input value={this.state.whatsApp} name="whatsApp"  onChange={ this.handleChange } placeholder="WhatsApp" />
            
            <div className="input-group">
              <input type="text" value={this.state.city} name="city"  onChange={ this.handleChange } placeholder="Cidade" />
  
              <input type="text" value={this.state.uf} name="uf"  onChange={ this.handleChange } placeholder="UF" style={{ width: 80 }} />
            </div>

            <button className="button-submit" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    )
  }
}
