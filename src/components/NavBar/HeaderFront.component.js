import React from 'react';

import axios from 'axios';
import NavBarComponent from './Navbar.component';
import Rapport_template from '../../components/Front/Rapport_template.component';
import Categorie from '../../components/Front/Categorie';
import Rapport_modification from "../../components/Front/Rapport_modification.component";
import Authentification from "../../components/Front/Authentification.component";
import AddTemplate from "../../components/Back/AddTemplate.component";
import AllTemplate from "../../components/Back/AllTemplatte.component";
import Inscription from "../../components/Front/Inscription.component";

import { Switch, Routes, BrowserRouter, Route, Router } from 'react-router-dom';
import Accueil from '../Front/Accueil.component';
import $ from 'jquery'
import ArchiveClient from '../Front/ArchiveClient';

import Reimportfile from '../Front/Reimportfile.component';
import ArchiveStep2ByUserPdf from '../Front/ArchiveStep2ByUserPdf.component';
import ArchiveStep2ByUser from '../Front/ArchiveStep2ByUser.component';
import ArchiveStep1ByUser from '../Front/ArchiveStep1ByUser.component';

import ArchiveStep3ByUser from '../Front/ArchiveStep3ByUser.component';

export default class HeaderFront extends React.Component {

    componentDidMount() {
        $(".back").attr("disabled", "disabled");
        $(".front").removeAttr("disabled");
    }

    render() {
        return (



            <div id="sdklfs" className="slkflk">


                <NavBarComponent />


                <br />
                <br />








                                                
                                            <Routes>
                                            
                                                    <Route exact path='/Templates/:id' element={< Rapport_template />}></Route>
                                                    <Route exact path='/ArchiveStep3ByUser' element={< ArchiveStep3ByUser />}></Route>
                                                    <Route exact path='/inscription' element={< Inscription />}></Route>
                                                    <Route exact path='/Authentification' element={< Authentification />}></Route>
                                                    <Route exact path='/Templates' element={< Rapport_template />}></Route>
                                                    <Route exact path='/Categories' element={< Categorie />}></Route>
                                                    <Route exact path='/Rapport/:id' element={< Rapport_modification />}></Route>
                                                    <Route exact path='/archivestep2user' element={< ArchiveStep2ByUser />}></Route>
                                                    <Route exact path='/archivestep2pdfuser' element={< ArchiveStep2ByUserPdf />}></Route>
                                                    
                                                    <Route exact path='/Reimportfile' element={< Reimportfile />}></Route>
                                                    <Route exact path='/archivestep1user' element={< ArchiveStep1ByUser />}></Route>


                    <Route exact path='/' element={< Accueil />}></Route>



                </Routes>


                {/*  Footer Start  */}
                <div className="container-fluid bg-dark text-light footer my-6 mb-0 py-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-white mb-4">Get In Touch</h4>
                                <h2 className="text-primary2 mb-4"><i className="fa fa-car text-white me-2"></i>Drivin</h2>
                                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                                <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-light mb-4">Quick Links</h4>
                                <a className="btn btn-link" href="">About Us</a>
                                <a className="btn btn-link" href="">Contact Us</a>
                                <a className="btn btn-link" href="">Our Services</a>
                                <a className="btn btn-link" href="">Terms  Condition</a>
                                <a className="btn btn-link" href="">Support</a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-light mb-4">Popular Links</h4>
                                <a className="btn btn-link" href="">About Us</a>
                                <a className="btn btn-link" href="">Contact Us</a>
                                <a className="btn btn-link" href="">Our Services</a>
                                <a className="btn btn-link" href="">Terms  Condition</a>
                                <a className="btn btn-link" href="">Support</a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h4 className="text-light mb-4">Newsletter</h4>
                                <form action="">
                                    <div className="input-group">
                                        <input type="text" className="form-control p-3 border-0" placeholder="Your Email Address" />
                                        <button className="btn btn-primary2">Sign Up</button>
                                    </div>
                                </form>
                                <h6 className="text-white mt-4 mb-3">Follow Us</h6>
                                <div className="d-flex pt-2">
                                    <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="btn btn-square btn-outline-light me-1" href=""><i className="fab fa-youtube"></i></a>
                                    <a className="btn btn-square btn-outline-light me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Footer End  */}



            </div>

        )
    }
}