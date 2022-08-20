import { contains } from "jquery";
import React, { Component } from "react";
import UserService from '../../services/UserService'
export default class Inscription extends Component {

  constructor(props) {
    super(props);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeconfirmPassword= this.onChangeconfirmPassword.bind(this);
    this.onChangeUserRole = this.onChangeUserRole.bind(this);

    this.saveUser = this.saveUser.bind(this);
    this.newUser = this.newUser.bind(this);
    this.state = {
      user: [],
      id: null,
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      confirmpassword: "",
      password: "",
      userRole: ""

    };
  }
  onChangeUserName(e) {
    this.setState({
      username: e.target.value
    });
  }
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
      
    });


    if(e.target.value.includes('@') && e.target.value.includes('.')){
      document.getElementById('errormail').style.display = "none";
    }
    else
    document.getElementById('errormail').style.display = "block";
  }
  onChangePassword(e) {
    document.getElementById('note').style.display = "block";
    this.setState({
      password: e.target.value
    });
  }
  onChangeconfirmPassword(e) {
    this.setState({
      confirmpassword: e.target.value
    });
    if(e.target.value!=this.state.password) {
      document.getElementById('errorconfirmpassword').style.display = "block";
    }else
    document.getElementById('errorconfirmpassword').style.display = "none";


  }

  onChangeUserRole(e) {
    this.setState({
      userRole: e.target.value
    });
  }
  saveUser() {
    if(this.state.username!=""&&this.state.firstName!=""&&this.state.lastName!=""&&this.state.confirmpassword!=""&&this.state.password!=""&&this.state.email!="" &&this.state.userRole!=""){
    var user = {
      username: this.state.username,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      userRole: this.state.userRole
    };
    console.log(user);


    UserService.createUser(user)
      .then(response => {

        window.location.href = "/Authentification";


      })
      .catch(e => {
        console.log(e);
        alert("probleme d'inscription")
      });
    } else {
      document.getElementById('error').style.display = "block";
    }

  }
  newUser() {
    this.setState({
      id: null,
      username: null,
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
      UserRole: ""
    });
  }

  render() {
    return (
      <div className="submit-form">

        <div className="row g-4 justify-content-center">
          <div className="col-lg-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-primary2 text-center p-5">
              <h1 style={{ color: 'white' }} className="mb-4">Inscription</h1>
              <form>
                <div className="row g-3">


                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input className="form-control border-0" required type="text" id="login" name="login" placeholder="login" value={this.state.username}
                        onChange={this.onChangeUserName} />
                      <label htmlFor="cage">Nom d'Utilisateur</label>
                    </div>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input className="form-control border-0" required type="text" id="login" name="login" placeholder="login" value={this.state.firstName}
                        onChange={this.onChangeFirstName} />
                      <label htmlFor="cage">Prénom</label>
                    </div>
                  </div>


                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input className="form-control border-0" required type="text" id="login" name="login" placeholder="login" value={this.state.lastName}
                        onChange={this.onChangeLastName} />
                      <label htmlFor="cage">Nom de famille</label>
                    </div>
                  </div>


                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input className="form-control border-0" required type="text" id="login" name="login" placeholder="login" value={this.state.email}
                        onChange={this.onChangeEmail} />
                      <label htmlFor="cage">Adresse Email</label>
                      <p id='errormail' style={{ display: 'none', color: 'red' }}> Email invalide</p>
                    </div>
                  </div>


                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input className="form-control border-0" required type="password" id="login" name="login" placeholder="login" value={this.state.password}
                        onChange={this.onChangePassword} />
                      <label htmlFor="cage">Mot de passe</label>
                    </div>
                    <label id ="note" style={{ color: "white", fontSize: '11px' , display:'none'}}>
                      Pour des raisons de sécurité, le mot de passe doit être composé au moins de 8 caractères,
                      comprenant au moins une lettre(majuscule et minuscule),
                      un chiffre et un caractère spécial parmi les suivants:(! # $ %  * + - / = ? )
                    </label>
                  </div>

                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input className="form-control border-0" required type="password" id="confirm" name="confirm" placeholder="confirm" value={this.state.confirmpassword}
                        onChange={this.onChangeconfirmPassword}

                      />
                      <p id='error1' style={{ display: 'none', color: 'red' }}> Vérifier vos coordonnées</p>
                      <label htmlFor="cage">confirmation Mot de passe</label>
                      <p id='errorconfirmpassword' style={{ display: 'none', color: 'red' }}> Les deux mots de passe ne sont pas identiques</p>
                    </div>
                  </div>





                  <table>
                    <tr><td><b style={{ color: '#ff7a59' }}>Select Role:</b></td><td><div className="radio">

                      <input
                        type="radio" name="rad"

                        value="1"
                        onChange={this.onChangeUserRole}
                      />
                      <label style={{ color: 'white' }} for="dewey"> Groupe Corilus </label>

                    </div></td>
                      <td></td>
                      <div className="radio">

                        <input name="rad"
                          type="radio"
                          value="2"

                          onChange={this.onChangeUserRole}
                        />

                        <label style={{ color: 'white' }} for="dewey">Particulier</label>
                      </div> </tr>

                  </table>
                  <div className="col-12">

                    <input type="button" onClick={this.saveUser} className="btn btn-primary3 w-100 py-3" value="S'inscrire" />
                    <div><br></br></div>

                    <p id='error' style={{ display: 'none', color: 'red' }}> Veuillez remplir les champs</p>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



