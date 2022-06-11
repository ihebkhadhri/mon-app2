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
import Accueil from '../Front/Accueil.component';
import $ from 'jquery'


export default class HeaderFront extends React.Component {

    componentDidMount() {
        $(".back").attr("disabled", "disabled");
        $(".front").removeAttr("disabled");
      }

    render() {
        return (



            <div id="sdklfs" className="slkflk">
                

                <NavBarComponent />


                    








                                                
                                            <Routes>
                                                    <Route exact path='/Templates/:id' element={< Rapport_template />}></Route>

                                                    <Route exact path='/Authentification' element={< Authentification />}></Route>
                                                    <Route exact path='/Templates' element={< Rapport_template />}></Route>
                                                    <Route exact path='/Categories' element={< Categorie />}></Route>
                                                    <Route exact path='/Rapport/:id' element={< Rapport_modification />}></Route>


                                                    <Route exact path='/AddTemplate' element={< AddTemplate />}></Route>
                                                    <Route exact path='/AllTemplate' element={< AllTemplate />}></Route>

                                                    <Route exact path='/a' element={< Accueil />}></Route>



                                                </Routes>
                                            
                </div>

        )
    }
}