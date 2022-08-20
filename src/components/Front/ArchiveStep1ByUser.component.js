import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import swal from 'sweetalert';
import './../../jquery.dataTables.min.css'

$.DataTable = require('datatables.net');




export default class ArchiveStep1ByUser extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.ConfirmDelete = this.ConfirmDelete.bind(this);
        this.JSalert = this.JSalert.bind(this);
        this.downloadinput = this.downloadinput.bind(this);
      
        this.suivant = this.suivant.bind(this);

    }

    state = {
        archives: []
    }

    JSalert(id) {

        swal({
            title: "Confirmez-vous?",
            text: "Voulez-vous extraire les données du rapport pour en faire un nouveau rapport ou Télécharger les données",
            icon: "warning",
            buttons: {
                extraire: " Extraire les données",
                catch: {
                    text: "Télécharger",
                    value: "Telecharger",
                },
                Annuler: "Annuler",
            },
        })
            .then((value) => {
                switch (value) {

                    case "extraire":
                        this.extraire(id);
                        break;

                    case "Telecharger":
                        this.downloadinput(id);
                        break;

                    
                }
            });
    }

    suivant(idIntegration) {
        
        
        window.location.href = "/Templates/" + idIntegration;
    }


    extraire(id) {
        axios.get(`https://localhost:7103/Archive/getidinputfilefromintegration/` + id)
            .then(res => {
                sessionStorage.setItem("idinputfile", res.data);

                window.location.href = "/Reimportfile";

            })
    }

    downloadinput(id) {
        axios.get(`https://localhost:7103/Archive/Downloadinput/` + id)
            .then(res => {

                console.log(res.data);
                const url = 'data:xml;base64,' + encodeURI(res.data);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'input.xml'); //or any other extension
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);

            }
            )
    }

    
    ConfirmDelete(id) {

        swal({
            title: "Confirmez-vous?",
            text: "Voulez-vous vraiment supprimer cet archivage",
            icon: "warning",
            buttons: {
                supprimer: "Supprimer",

                Annuler: "Annuler",
            },
        })
            .then((value) => {
                if (value == "supprimer") {
                    this.delete(id);
                  
                    swal("Archive supprimée avec succés");
                }



            });
    }


    delete(id) {
        axios.delete(`https://localhost:7103/Archive/Deletearchive/` + id)
            .then(res => {
                this.setState({ archives: this.state.archives.filter(t => t.id !== id) });

            }
            )
    }

    componentDidMount() {
        axios.get(`https://localhost:7103/Archive/AllArchivesbyuserstep1/`)
            .then(res => {
                console.log(res.data);
                this.setState({
                    archives: res.data,

                }); $('#dt').DataTable({ "pagingType": "full_numbers",  "language": {
                    "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                } });
                $('.dataTables_length').addClass('bs-select');

            }
            )


    }

    render() {
        return (
            <div className="archives">

                <h4 className='titre '>Mes Archives Step 1</h4>
               
                <table id="dt" className="table   table-striped table-bordered table-sm" cellSpacing="0" width="100%" >

                    <thead>
                        <tr>

                            <th>Nom Fichier</th>
                            <th> Catégorie </th>
                            <th>Utilisateur</th>
                            <th>Date de dépot</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {this.state.archives.map((item, index) => {
                            return (
                                <tr>

                                    <th>{item.fileName}.pdf</th>
                                    <th>{item.categorie.libelle}</th>
                                    <th>{item.userImport.username}</th>
                                    <th>{new Date(item.created).toLocaleDateString()}  {new Date(item.created).toLocaleTimeString()} </th>

                                    <th>
                                        <div className='d-flex justify-content-center col-12'>
                                           
                                            <button title="Extraire data" className="btn btn-link" onClick={() => this.JSalert(item.id)}><i className="fas fa-file-import" style={{ color: "purple" }}></i></button>
                                            <button title="Supprimer archive" className="btn btn-link" onClick={() => this.ConfirmDelete(item.id)}><i className="fas fa-trash-alt" style={{ color: "red" }}></i></button>
                                            <button title="Continuer l'archivage" className="btn btn-link" onClick={() => this.suivant(item.id)}><i className="fas fa-arrow-alt-circle-right" style={{ color: "green" }}></i></button>

                                        </div>
                                    </th>
                                </tr>
                            )
                        })}
                    </tbody>


                </table>

            </div>

        );
    }
}