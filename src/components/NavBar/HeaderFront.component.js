import React from 'react';

import axios from 'axios';
import NavBarComponent from './Navbar.component';
import Rapport_template from '../../components/Front/Rapport_template.component';
import Categorie from '../../components/Front/Categorie';
import Rapport_modification from "../../components/Front/Rapport_modification.component";
import Authentification from "../../components/Front/Authentification.component";
import AddTemplate from "../../components/Back/AddTemplate.component";
import AllTemplate from "../../components/Back/AllTemplatte.component";

import { Switch, Routes, BrowserRouter, Route, Router } from 'react-router-dom';


export default class HeaderFront extends React.Component {


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
                                                <input type="text" className="form-control  search-text" placeholder="Search Friend"
                                                    id="search-friends" />
                                                <div className="form-icon">
                                                    <i className="icofont icofont-search"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="main-friend-list">
                                        <div className="media userlist-box" data-id="1" data-status="online" data-username="Josephin Doe"
                                            data-toggle="tooltip" data-placement="left" title="Josephin Doe">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius img-radius"
                                                    src="%PUBLIC_URL%/libraries\assets\images\avatar-3.jpg" alt="Generic placeholder image " />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Josephin Doe</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="2" data-status="online" data-username="Lary Doe"
                                            data-toggle="tooltip" data-placement="left" title="Lary Doe">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="%PUBLIC_URL%/libraries\assets\images\avatar-2.jpg"
                                                    alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Lary Doe</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="3" data-status="online" data-username="Alice"
                                            data-toggle="tooltip" data-placement="left" title="Alice">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="%PUBLIC_URL%/libraries\assets\images\avatar-4.jpg"
                                                    alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Alice</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="4" data-status="online" data-username="Alia"
                                            data-toggle="tooltip" data-placement="left" title="Alia">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="%PUBLIC_URL%/libraries\assets\images\avatar-3.jpg"
                                                    alt="Generic placeholder image" />
                                                <div className="live-status bg-success"></div>
                                            </a>
                                            <div className="media-body">
                                                <div className="f-13 chat-header">Alia</div>
                                            </div>
                                        </div>
                                        <div className="media userlist-box" data-id="5" data-status="online" data-username="Suzen"
                                            data-toggle="tooltip" data-placement="left" title="Suzen">
                                            <a className="media-left" href="#!">
                                                <img className="media-object img-radius" src="%PUBLIC_URL%/libraries\assets\images\avatar-2.jpg"
                                                    alt="Generic placeholder image" />
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
                                <img className="media-object img-radius img-radius m-t-5"
                                    src="%PUBLIC_URL%/libraries\assets\images\avatar-3.jpg" alt="Generic placeholder image" />
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
                                    <img className="media-object img-radius img-radius m-t-5"
                                        src="%PUBLIC_URL%/libraries\assets\images\avatar-4.jpg" alt="Generic placeholder image" />
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


                            <div className="pcoded-content" style={{ marginLeft:'0px' }}>
                                <div className="pcoded-inner-content">
                                    <div className="main-body">
                                        <div className="page-wrapper">

                                            <div className="page-body">





                                                
                                            <Routes>
                                                    <Route exact path='/Templates/:id' element={< Rapport_template />}></Route>

                                                    <Route exact path='/Authentification' element={< Authentification />}></Route>
                                                    <Route exact path='/Templates' element={< Rapport_template />}></Route>
                                                    <Route exact path='/Categories' element={< Categorie />}></Route>
                                                    <Route exact path='/Rapport/:id' element={< Rapport_modification />}></Route>


                                                    <Route exact path='/AddTemplate' element={< AddTemplate />}></Route>
                                                    <Route exact path='/AllTemplate' element={< AllTemplate />}></Route>

                                                </Routes>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        )
    }
}