import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { render } from '@testing-library/react';
import './Authentification.component.css'; // Tell webpack that Button.js uses these styles
import SidebarComponent from "../../components/SideBar/sidebar.component";
import NavBarComponent from '../NavBar/Navbar.component';

export default class Authentification extends React.Component {


  constructor(props) {
    super(props);

    sessionStorage.clear();
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

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })

  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }

  onSubmit(e) {

    axios.get('https://localhost:7103/Token/GetUser/' + this.state.username + '/' + this.state.password)
      .then(res => {
        console.log(res.data);
        this.setState({ ourtoken: res.data })
        sessionStorage.setItem("Token", res.data.jwttoken);
        sessionStorage.setItem("Role",res.data.role);
        document.getElementById('error').style.display = "none";
        if (res.data.role == "Administrateur")
          window.location.href = "/AllTemplate";
        else
          window.location.href = "/Categories";
      })
      .catch((error) => {
        document.getElementById('error').style.display = "block";
      })
  }


  render() {
    return (

                        
                        <div className="wrapper fadeInDown">
                          <div id="formContent">

                            <div className="fadeIn first">

                            </div>

                            <form>
                              <input required type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={this.state.username}
                                onChange={this.onChangeUsername} />
                              <input required type="password" value={this.state.password}
                                onChange={this.onChangePassword} id="password" className="fadeIn third" name="login" placeholder="password" />
                              <input type="button" onClick={this.onSubmit} className="fadeIn fourth" value="Log In" />
                              <p id='error' style={{ display: 'none', color: 'red' }}> Vérifier vos coordonnées</p>
                            </form>



                          </div>
                        </div>


                    



    );
  }

}