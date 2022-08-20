import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import swal from 'sweetalert';
import './../../jquery.dataTables.min.css'
import { Link } from 'react-router-dom';
$.DataTable = require('datatables.net');




export default class ArchiveStep3ByUser extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.JSalert = this.JSalert.bind(this);
        this.downloadinput = this.downloadinput.bind(this);
        this.downloaRtf = this.downloaRtf.bind(this);
        this.precedent = this.precedent.bind(this);
        this.ConfirmDelete = this.ConfirmDelete.bind(this);

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

                    default:
                        swal("Got away safely!");
                }
            });
    }

    precedent(idIntegration) {
        axios.get(`https://localhost:7103/Integration/decrementetat/` + idIntegration)
        .then(res => {           
           window.location.reload();
        })
        
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

    download(id) {
        axios.get(`https://localhost:7103/Archive/Downloadarchive/` + id)
            .then(res => {
                let pdfWindow = window.open("");
                pdfWindow.document.write(
                    "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
                    encodeURI(res.data) + "'></iframe>"
                )



            }
            )
    }
    downloaRtf(id) {
        axios.get(`https://localhost:7103/Template/DownloadTemplateMappee/` + id)
            .then(res => {

                console.log(res.data);
                const url = 'data:xml;base64,' + encodeURI(res.data);
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'template.rtf'); //or any other extension
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
        axios.get(`https://localhost:7103/Archive/AllArchivesStep3/`)
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

                <h4 className='titre '>Mes Archives Step 3</h4>
                <div className='row' style={{ display: 'inline-block', marginBottom: '20px', marginLeft: '1%' }}>
                    <span> <Link to={"/ArchiveStep3ByUser"} style={{ display: 'inline-block', color: 'rgba(0,136,164,1)' }} title="Vue table" ><i className="fas fa-table"></i></Link> </span>
                    <span> | </span>
                    <span> <Link to={"/archivestep3pdfuser"} style={{ display: 'inline-block' }} title="Consulter Vos archives. Vous pouvez faire une recherche de contenu" ><i className="fas fa-eye"></i></Link> </span>


                </div>
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
                                    <th>{item.template.categorie.libelle}</th>
                                    <th>{item.userImport.username}</th>
                                    <th>{new Date(item.created).toLocaleDateString()}  {new Date(item.created).toLocaleTimeString()} </th>

                                    <th>
                                        <div className='d-flex justify-content-center col-12'>
                                            <button title="Download Word version" className="btn btn-link" onClick={() => this.downloaRtf(item.id)}><i class="far fa-file-word" style={{ color: "brown" }}></i></button>
                                            <button title="Download Pdf version" className="btn btn-link" onClick={() => this.download(item.id)}><i class="fas fa-file-pdf" style={{ color: "orangered" }}></i></button>
                                            <button title="Extraire data" className="btn btn-link" onClick={() => this.JSalert(item.id)}><i className="fas fa-file-import" style={{ color: "purple" }}></i></button>
                                            <button title="Supprimer archive" className="btn btn-link" onClick={() => this.ConfirmDelete(item.id)}><i className="fas fa-trash-alt" style={{ color: "red" }}></i></button>
                                            <button title="Retourner pour choisir un template" className="btn btn-link" onClick={() => this.precedent(item.id)}><i className="fas fa-arrow-alt-circle-left" style={{ color: "green" }}></i></button>

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