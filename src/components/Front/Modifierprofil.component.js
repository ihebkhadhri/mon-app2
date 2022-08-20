import React, { Component } from "react";
import UserService from '../../services/UserService';
import swal from 'sweetalert';
import $ from 'jquery';




export default class ModifierProfil extends Component {

    constructor(props) {
        super(props);
        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);

        this.saveUser = this.saveUser.bind(this);
        this.toUpdate = this.toUpdate.bind(this);

    }
    state = {
        user: null,
        username: "",
        firstName: "",
        lastName: "",
        email: "",

    };

    componentDidMount() {


        UserService.getUser(sessionStorage.getItem("iduserconnected"))
            .then(res => {
                console.log(res.data)
                this.setState({
                    user: res.data,
                    username: res.data.username,
                    firstName: res.data.firstName,
                    lastName: res.data.lastName,
                    email: res.data.email,
                });

                $(".item-to-show").hide();

            })
            .catch(e => {

            });
    }
    onChangeUserName(e) {
        this.setState({
            username: e.target.value
        });
        this.state.user.username = e.target.value

    }
    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
        this.state.user.firstName = e.target.value

    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
        this.state.user.lastName = e.target.value

    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
        this.state.user.email = e.target.value

    }
    onChangePassword(e) {

        this.state.user.password = e.target.value

    }


    saveUser() {



        UserService.updateUser(this.state.user)
            .then(res => {

                swal("Vos coordonnées sont mises à jour")
                $(".item-to-hide").show();
                $(".item-to-show").hide();
                $(".champs-update").attr("disabled","disabled");


            })
            .catch(e => {

            });

    }

    toUpdate() {
        $(".item-to-hide").hide();
        $(".item-to-show").show();
        $(".champs-update").removeAttr("disabled");

        

    }


    render() {
        return (

            <div class="container">
                <div class="row d-flex justify-content-between">
                    <div class="col-12 col-lg-5 col-md-6">
                        {this.state.user != null ?
                            <fieldset class="group-border">
                                <legend class="group-border">coordonnées de mon profil <button onClick={this.toUpdate} style={{ textDecoration: 'none', color: 'burlywood' }} className="btn btn-link item-to-hide" > <i className="fas fa-pen" style={{ color: 'burlywood' }}></i> <span style={{ textDecoration: 'none', color: 'burlywood' }}>...</span> </button> </legend>



                                <div className="col-12 champs-modifier-profil">
                                    <div className="form-floating">
                                        <input disabled className="form-control  " required type="text" id="A" name="loginmm" placeholder="login" value={this.state.username}
                                            onChange={this.onChangeUserName} />
                                        <label htmlFor="cage">Nom d'Utilisateur</label>
                                    </div>
                                </div>

                                <div className="col-12 champs-modifier-profil">
                                    <div  className="form-floating ">
                                        <input disabled className="form-control champs-update" required type="text" id="b" name="login" placeholder="login" value={this.state.firstName}
                                            onChange={this.onChangeFirstName} />
                                        <label htmlFor="cage">Prénom</label>
                                    </div>
                                </div>


                                <div className="col-12 champs-modifier-profil">
                                    <div  className="form-floating">
                                        <input disabled className="form-control champs-update" required type="text" id="c" name="login" placeholder="login" value={this.state.lastName}
                                            onChange={this.onChangeLastName} />
                                        <label htmlFor="cage">Nom de famille</label>
                                    </div>
                                </div>


                                <div className="col-12 champs-modifier-profil">
                                    <div  className="form-floating ">
                                        <input disabled className="form-control champs-update" required type="text" id="d" name="login" placeholder="login" value={this.state.email}
                                            onChange={this.onChangeEmail} />
                                        <label htmlFor="cage">Adresse Email</label>
                                    </div>
                                </div>


                                <div className=" item-to-show" >



                                    <div className="col-12 champs-modifier-profil">
                                        <div className="form-floating">
                                            <input className="form-control" required type="password" id="e" name="login" placeholder="login"
                                                onChange={this.onChangePassword} />
                                            <label htmlFor="cage">Mot de passe</label>
                                        </div>
                                        <label style={{ fontSize: '10.5px' }}>
                                            Pour des raisons de sécurité, le mot de passe doit être composé au moins de 8 caractères,
                                            comprenant au moins une lettre(majuscule et miniscule),
                                            un chiffre et un caractère spécial parmi les suivants:(! # $ %  * + - / = ? )
                                        </label>
                                    </div>

                                    <div className="col-12 champs-modifier-profil">
                                        <div className="form-floating">
                                            <input className="form-control" required type="confirmpassword" id="confirm" name="confirm" placeholder="confirm"
                                            />
                                            <label htmlFor="cage">confirmation Mot de passe</label>
                                        </div>
                                    </div>

                                </div>








                                <div className="col-2 item-to-show ">

                                    <input type="button" onClick={this.saveUser} className="btn btn-primary3 w-100 py-3" value="Modifier" />




                                </div>




                            </fieldset>
                            : <div></div>
                        }
                    </div>

                    <div className="col-12 col-lg-6 col-md-6" >
                        <img src="img/updateuser.jpeg" className="imageprofilupdate" style={{ width: '100%' }} />
                    </div>

                </div>
            </div>

        );
    }
}



