import React, { Component } from 'react'
import { Link } from "react-router-dom";
import CategorieService from '../../services/CategorieService'
import './../../jquery.dataTables.min.css'
import $ from 'jquery';
import swal from 'sweetalert';


$.DataTable = require('datatables.net');
class ListCategorie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }

        this.editCategorie = this.editCategorie.bind(this);
        this.JSalert = this.JSalert.bind(this);
    }

    deleteCategorie(id) {


        CategorieService.deleteCategorie(id).then(res => {
            this.setState({ categories: this.state.categories.filter(categorie => categorie.id !== id) });
            
            
        });




    }

    editCategorie(id) {
        sessionStorage.setItem("idcat", id);
        window.location.href = `/UpdateCategorie/`;
    }

    componentDidMount() {
        CategorieService.getCategories().then((res) => {
            this.setState({ categories: res.data });
            $('#dt').DataTable({
                "pagingType": "full_numbers", "language": {
                    "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                }
            });
            $('.dataTables_length').addClass('bs-select');
        });

    }

    JSalert(id) {

        swal({
            title: "Confirmez-vous?",
            text: "Voulez-vous vraiment supprimer cette catégorie",
            icon: "warning",
            buttons: {
                supprimer: "Supprimer",

                Annuler: "Annuler",
            },
        })
            .then((value) => {
                if (value == "supprimer") {
                    this.deleteCategorie(id);
                  
                    swal("Catégorie supprimée avec succés");
                }



            });
    }



    render() {
        return (
            <div>

                <h2 className="text-center">Liste des catégories</h2>
                <div className="">
                    <button className="btn btn-info">
                        <Link to={"/AddCategorie"} className="nav-link" style={{ color: 'white' }}>Ajouter une nouvelle catégorie </Link>
                    </button>

                </div>
                <br></br>
                <div className="row">
                    <table id="dt" className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Libelle</th>
                                <th> Description</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.categories.map(
                                    categorie =>
                                        <tr key={categorie.id}>
                                            <td> {categorie.libelle} </td>
                                            <td> {categorie.description}</td>
                                            <td>

                                                <div className='d-flex justify-content-center col-12'>

                                                    <button title='modifier catégorie' className="btn-link" onClick={() => this.editCategorie(categorie.id)}><i className="fas fa-pen" style={{ color: "brown" }}></i></button>
                                                    <button title='supprimer catégorie' className="btn-link" onClick={() => this.JSalert(categorie.id)}><i className="fas fa-trash-alt" style={{ color: "red" }}></i></button>

                                                </div>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default ListCategorie