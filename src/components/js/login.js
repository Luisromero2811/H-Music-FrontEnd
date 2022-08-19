import React, { Component } from "react"
import '../css/login.css';
import logo from '../img/logo.png';
import axios from 'axios';
import Cookies from 'universal-cookie';


class Login extends Component {


    
    state = {
        email: '',
        password: '',
        cookies: null,
    }
    constructor(){
        super(); 
        this.state.cookies = new Cookies();
    }



    handleChangeEmail = event => {
        this.setState({ 
            email: event.target.value,
        });
    }

    handleChangeContraseña = event => {
        this.setState({ 
            password: event.target.value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();

        const request = {
            email: this.state.email,
            password: this.state.password
        };

        axios.post(`http://127.0.0.1:8000/api/login`,request).then(res => {
                console.log(res);
                console.log(res.data);
                if(res.data.status){
                    this.state.cookies.set('token', res.data.token);
                    console.log("Token de las cookies")
                    console.log(this.state.cookies.get('token'))
                    alert("Bienvenido a H-Music")
                }else{
                    alert("Ups! Algo está incorrecto")
                }
            })
            
    }

  render() {
    return (
      <div>
          <div className="container-fluid bg">
      <div className="row align-items-center vh-100">
          <div className="col-lg-6">
              <img src={logo} alt="H-Music" className=""></img>
          </div>

          <div className="line px-0"></div>

          <div className="col-lg-5 px-5 letras">
              <form onSubmit={this.handleSubmit}>
                  <div className="mb-3 text-start">
                      <label  className="form-label py-2">Ingrese su correo:</label>
                      <input type="email" name="email" onChange={this.handleChangeEmail} className="form-control rounded-pill" id="exampleInputEmail1" aria-describedby="emailHelp" />

                  </div>
                  <div className="mb-3 text-start ">
                      <label  className="form-label py-2">Ingrese su contraseña:</label>
                      <input type="password" name="password" onChange={this.handleChangeContraseña} className="form-control rounded-pill" id="exampleInputPassword1"/>
                  </div>

                  <div className="d-grid gap-2 col-6 mx-auto py-2">
                  <button type="submit" className="btn btn-primary text-center rounded-pill">Iniciar</button>

                  </div>
                  <div className="text">
                    <a href="#" className="card-link">Registrarme</a>
                    </div>
              </form>
          </div>
      </div>
         </div>
  </div>
    )
  }
}
export default Login