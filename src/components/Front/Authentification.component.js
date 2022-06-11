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
      <div id="pcoded" className="pcoded">
        <div className="pcoded-overlay-box"></div>
        <div className="pcoded-container navbar-wrapper">

          <NavBarComponent />


            <div id="sidebar" className="users p-chat-user showChat">
                <div className="had-container">
                    <div className="card card_main p-fixed users-main">
                        <div className="user-box">
                            <div className="chat-inner-header">
                                <div className="back_chatBox">
                                    <div className="right-icon-control">
                                        <input type="text" className="form-control  search-text" placeholder="Search Friend" id="search-friends" />
                                        <div className="form-icon">
                                            <i className="icofont icofont-search"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="main-friend-list">
                                <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe" data-toggle="tooltip" data-placement="left" title="Josephin Doe">
                                    <a className="media-left" href="#!">
                                        <img className="media-object img-radius img-radius" src="%PUBLIC_URL%/libraries\assets\images\avatar-3.jpg" alt="Generic placeholder image " />
                                        <div className="live-status bg-success"></div>
                                    </a>
                                    <div className="media-body">
                                        <div className="f-13 chat-header">Josephin Doe</div>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe" data-toggle="tooltip" data-placement="left" title="Lary Doe">
                                    <a className="media-left" href="#!">
                                        <img className="media-object img-radius" src="%PUBLIC_URL%/libraries\assets\images\avatar-2.jpg" alt="Generic placeholder image" />
                                        <div className="live-status bg-success"></div>
                                    </a>
                                    <div className="media-body">
                                        <div className="f-13 chat-header">Lary Doe</div>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice" data-toggle="tooltip" data-placement="left" title="Alice">
                                    <a className="media-left" href="#!">
                                        <img className="media-object img-radius" src="%PUBLIC_URL%/libraries\assets\images\avatar-4.jpg" alt="Generic placeholder image" />
                                        <div className="live-status bg-success"></div>
                                    </a>
                                    <div className="media-body">
                                        <div className="f-13 chat-header">Alice</div>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="4" data-status="online" data-username="Alia" data-toggle="tooltip" data-placement="left" title="Alia">
                                    <a className="media-left" href="#!">
                                        <img className="media-object img-radius" src="%PUBLIC_URL%/libraries\assets\images\avatar-3.jpg" alt="Generic placeholder image" />
                                        <div className="live-status bg-success"></div>
                                    </a>
                                    <div className="media-body">
                                        <div className="f-13 chat-header">Alia</div>
                                    </div>
                                </div>
                                <div className="media userlist-box" data-id="5" data-status="online" data-username="Suzen" data-toggle="tooltip" data-placement="left" title="Suzen">
                                    <a className="media-left" href="#!">
                                        <img className="media-object img-radius" src="%PUBLIC_URL%/libraries\assets\images\avatar-2.jpg" alt="Generic placeholder image" />
                                        <div className="live-status bg-success"></div>
                                    </a>
                                    <div className="media-body">
                                        <div className="f-13 chat-header">Suzen</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="showChat_inner">
                <div className="media chat-inner-header">
                    <a className="back_chatBox">
                        <i className="feather icon-chevron-left"></i> Josephin Doe
                    </a>
                </div>
                <div className="media chat-messages">
                    <a className="media-left photo-table" href="#!">
                        <img className="media-object img-radius img-radius m-t-5" src="%PUBLIC_URL%/libraries\assets\images\avatar-3.jpg" alt="Generic placeholder image" />
                    </a>
                    <div className="media-body chat-menu-content">
                        <div className="">
                            <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                            <p className="chat-time">8:20 a.m.</p>
                        </div>
                    </div>
                </div>
                <div className="media chat-messages">
                    <div className="media-body chat-menu-reply">
                        <div className="">
                            <p className="chat-cont">I'm just looking around. Will you tell me something about yourself?</p>
                            <p className="chat-time">8:20 a.m.</p>
                        </div>
                    </div>
                    <div className="media-right photo-table">
                        <a href="#!">
                            <img className="media-object img-radius img-radius m-t-5" src="%PUBLIC_URL%/libraries\assets\images\avatar-4.jpg" alt="Generic placeholder image" />
                        </a>
                    </div>
                </div>
                <div className="chat-reply-box p-b-20">
                    <div className="right-icon-control">
                        <input type="text" className="form-control search-text" placeholder="Share Your Thoughts" />
                        <div className="form-icon">
                            <i className="feather icon-navigation"></i>
                        </div>
                    </div>
                </div>
            </div>



          <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
              <SidebarComponent />

              <div className="pcoded-content">
                <div className="pcoded-inner-content">
                  <div className="main-body">
                    <div className="page-wrapper">

                      <div className="page-body">
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div></div>

        </div>
      </div>




    );
  }

}