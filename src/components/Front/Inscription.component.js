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
        password: "",
        userRole: ""

    };
  }
  onChangeUserName(e) {
    this.setState({
        userName: e.target.value
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
  }
  onChangePassword(e) {
    this.setState({
        password: e.target.value
    });
  }

  onChangeUserRole(e) {
    this.setState({
        userRole: e.target.value
    });
  }
  saveUser() {
    var user = {
        userName: this.state.userName,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        userRole: this.state.userRole
    };
    console.log(user);
    UserService.createUser(user)
      .then(response => {
        this.setState({
          id: response.user.id,
          username: response.user.username,
          password: response.user.password,
          email: response.user.email,
          firstName: response.user.firstName,
          lastName: response.user.lastName,
          userRole: response.user.userRole
         
        });
        console.log(response.user);
      })
      .catch(e => {
        console.log(e);
      });
  }
  newUser() {
    this.setState({
        id: null,
        username: null,
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        UserRole: ""
    });
  }
  
  render() {
    return (
      <div className="submit-form">
        
          <div class="row g-4 justify-content-center">
        <div className="col-lg-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
          <div className="bg-primary2 text-center p-5">
            <h1 className="mb-4">S'inscrire</h1>
            <form>
              <div className="row g-3">


              <div className="col-sm-12">
                  <div className="form-floating">
                    <input className="form-control border-0" required type="text" id="login" name="login" placeholder="login" value={this.state.userName}
                onChange={this.onChangeUserName} />
                    <label htmlFor="cage">Username</label>
                  </div>
                </div>

                <div className="col-sm-12">
                  <div className="form-floating">
                    <input className="form-control border-0" required type="text" id="login" name="login" placeholder="login" value={this.state.firstName}
                onChange={this.onChangeFirstName} />
                    <label htmlFor="cage">First Name</label>
                  </div>
                </div>


                <div className="col-sm-12">
                  <div className="form-floating">
                    <input className="form-control border-0" required type="text" id="login" name="login" placeholder="login" value={this.state.lastName}
                onChange={this.onChangeLastName} />
                    <label htmlFor="cage">Last Name</label>
                  </div>
                </div>


                <div className="col-sm-12">
                  <div className="form-floating">
                    <input className="form-control border-0" required type="text" id="login" name="login" placeholder="login" value={this.state.email}
                onChange={this.onChangeEmail} />
                    <label htmlFor="cage">Email</label>
                  </div>
                </div>


                <div className="col-sm-12">
                  <div className="form-floating">
                    <input className="form-control border-0" required type="password" id="login" name="login" placeholder="login" value={this.state.password}
                onChange={this.onChangePassword} />
                    <label htmlFor="cage">Password</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <input className="form-control border-0" required type="text" id="password" name="password" placeholder="password" value={this.state.UserRole}
                onChange={this.onChangeUserRole} />



                    <label htmlFor="message"> Role</label>
                  </div>
                </div>


                <div className="col-12">

                  <input type="button" onClick={this.saveUser} className="btn btn-dark w-100 py-3" value="Log In" />
                  <div><br></br></div>
                  
                  <p id='error' style={{ display: 'none', color: 'red' }}> Vérifier vos coordonnées</p>

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
    

