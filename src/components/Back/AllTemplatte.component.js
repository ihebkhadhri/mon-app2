import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import swal from 'sweetalert';

import './../../jquery.dataTables.min.css'

$.DataTable = require('datatables.net');




export default class AllTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.downloadfile = this.downloadfile.bind(this);
        this.removefile = this.removefile.bind(this);
        this.JSalert = this.JSalert.bind(this);

    }

    state = {
        tempates: []
    }



    componentDidMount() {


        try {
            const res2 = axios.get("https://localhost:7103/Template/AdminAllTemplatesByCategorie")
                .then(res => {

                    this.setState({
                        tempates: res.data
                    });
                    $('#dt').DataTable({
                        "pagingType": "full_numbers", "language": {
                            "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                        }
                    }); $('.dataTables_length').addClass('bs-select');
                });
        } catch (ex) {
            console.log(ex);
        }


    }

    downloadfile(id) {

        var xhr = new XMLHttpRequest();
        xhr.open("GET", "https://localhost:7103/Template/DownloadTemplate/" + id);


        xhr.onload = function () {
            if (this.status === 200) {
                console.log("*******");
                console.log(xhr.response);
                // window.open('data:application/pdf;base64,' + xhr.response);

                let pdfWindow = window.open("")
                pdfWindow.document.write(
                    "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
                    encodeURI(xhr.response) + "'></iframe>"
                )


                //  window.location.href = 'data:application/pdf;base64,' + xhr.response;
            }
        };
        xhr.send();
    }

    removefile(id) {
      


        axios.get("https://localhost:7103/Template/removeTemplate/" + id) .then(res5 => {
    
            this.setState({ tempates: this.state.tempates.filter(t => t.id !== id) });
    
        })

    }

    JSalert(id) {

        swal({
            title: "Confirmez-vous?",
            text: "Voulez-vous vraiment supprimer ce template",
            icon: "warning",
            buttons: {
                supprimer: "Supprimer",

                Annuler: "Annuler",
            },
        })
            .then((value) => {
                if (value == "supprimer") {
                    this.removefile(id);
                  
                    swal("template supprimée avec succés");
                }



            });
    }





    render() {
        return (
            <div className="templates">
                <h2>Nos Templates</h2>
                
                <table id="dt" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%" >

                    <thead>
                        <tr>

                            <th>Nom</th>
                            <th>Categorie</th>
                            <th>Date de création</th>
                            <th>Action</th>

                        </tr>
                    </thead>

                    <tbody>
                        {this.state.tempates.map((item, index) => {
                            return (
                                <tr>

                                    <th>{item.nom}.pdf</th>
                                    <th>{item.categorie.libelle}</th>
                                    <th>{new Date(item.creation_Date).toLocaleDateString()}</th>
                                    <th>
                                        <div className='d-flex justify-content-center col-12'>
                                            <button title="télécharger template" className="btn-link" onClick={() => this.downloadfile(item.id)}><i className="fas fa-download" style={{ color: "orange" }}></i></button>
                                            <button title="supprimer template" className="btn-link" onClick={() => this.JSalert(item.id)}><i className="fas fa-trash-alt" style={{ color: "red" }}></i></button>
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