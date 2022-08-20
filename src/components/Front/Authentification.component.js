import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { render } from '@testing-library/react';
import './Authentification.component.css'; // Tell webpack that Button.js uses these styles
import SidebarComponent from "../../components/SideBar/sidebar.component";
import NavBarComponent from '../NavBar/Navbar.component';
import { Link } from "react-router-dom";
export default class Authentification extends React.Component {


  constructor(props) {
    super(props);

    

    this.onChangeUsername = this.onChangeUsername.bind(this);

    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
  }


  state = {
    docs: [],
    username: "",
    password: "",
    ourtoken: Object
  }

  componentDidMount(){
    let tokenAuth = sessionStorage.getItem("Token");

    sessionStorage.clear();

    if (tokenAuth != null) {
      window.location.href = "/Authentification";
    }
  }

  onChangeUsername(e) {
    document.getElementById('error').style.display = "none";
    document.getElementById('error1').style.display = "none";
    this.setState({
      username: e.target.value
    })

  }

  onChangePassword(e) {
    document.getElementById('error').style.display = "none";
    document.getElementById('error1').style.display = "none";
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {
    document.getElementById('error').style.display = "none";
    document.getElementById('error1').style.display = "none";

    if(document.getElementById('login').value !="" && document.getElementById('password').value!="") {

    axios.get('https://localhost:7103/Token/GetUser/' + this.state.username + '/' + this.state.password)
      .then(res => {
        console.log(res.data);
        this.setState({ ourtoken: res.data })
        sessionStorage.setItem("Token", res.data.jwttoken);
        sessionStorage.setItem("Role", res.data.role);
        sessionStorage.setItem("DisplayName", res.data.username);
        sessionStorage.setItem("iduserconnected", res.data.userId);
        document.getElementById('error').style.display = "none";
        if (res.data.role == "Administrateur")
          window.location.href = "/Dashboard";
        else
          window.location.href = "/Categories";
      })
      .catch((error) => {
        document.getElementById('error').style.display = "block";
      }) }
      else {
        
        document.getElementById('error1').style.display = "block";
      }
    
  }


  render() {
    return (


      <div className="row g-4 justify-content-center">
        <div className="col-lg-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-primary2 text-center p-5">
            <h1 style={{ color:'white' }} className="mb-4">Accéder à votre espace</h1>
            <form>
              <div className="row g-3">



                <div className="col-sm-12">
                  <div className="form-floating">
                    <input className="form-control border-0" required type="text" id="login" name="login" placeholder="login" value={this.state.username} onChange={this.onChangeUsername} />
                    <label htmlFor="cage">Nom Utilisateur</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input className="form-control border-0" required type="password" id="password" name="password" placeholder="password" value={this.state.password} onChange={this.onChangePassword} />
                    <label htmlFor="message"> Mot de passe</label>
                  </div>
                </div>
                <div className="col-12">

                  <input type="button" onClick={this.onSubmit} className="btn btn-primary3 w-100 py-3" value="Se Connecter" />
                  <div><br></br></div>
                  
                   <span style={{ color : 'white' }}>Vous n'avez pas encore un compte? </span> <Link to={"/inscription"} className=" w-100 py-3" style={{ color:'#ff7a59' }}><b >S'inscrire</b> </Link>
                 
                  <p id='error' style={{ display: 'none', color: 'red' }}> Vérifier vos coordonnées</p>
                  <p id='error1' style={{ display: 'none', color: 'red' }}> Veuillez remplier les champs!</p>

                </div>
              </div>
            </form>
          </div>
        </div>
      </div>





    );
  }

}