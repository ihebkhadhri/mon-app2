import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import swal from 'sweetalert';
import './../../jquery.dataTables.min.css'
import { Link } from 'react-router-dom';
$.DataTable = require('datatables.net');
export default class AdminControlSteps extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.downloadinput = this.downloadinput.bind(this);
        this.ConfirmDelete = this.ConfirmDelete.bind(this);

    }
    state = {
        
        integrations: []
    
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
                this.setState({ integrations: this.state.integrations.filter(t => t.id !== id) });

            }
            )
    }
    componentDidMount(){
      
        axios.get(`https://localhost:7103/Integration/IntegrationStep1/`)

        .then(res => {
  
            console.log(res.data);
  
          this.setState({ integrations: res.data });
          $('#dt').DataTable({ "pagingType": "full_numbers" });
          $('.dataTables_length').addClass('bs-select');
        })
      
   
      }

     
    render() {
        return (
            <div>
                
                 <h2 className="text-center">Workflow Etape 1</h2>
                 
                 <br></br>
                 <div className = "row">
                 <table id="dt" className="table   table-striped table-bordered table-sm" cellSpacing="0" width="100%" >


                            <thead>
                                <tr>
                                    <th>nom fichier</th>
                                    <th>username</th>
                                    <th> Catégorie</th>
                                    <th> Date de dépot</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                    this.state.integrations.map(
                                        integration => 
                                        <tr>
                                            <td>{integration.fileName }</td>
                                            <td>{integration.userImport.username}</td>
                                             <td>{integration.categorie.libelle}  </td>   
                                             <td>{new Date(integration.created).toLocaleDateString()}  {new Date(integration.created).toLocaleTimeString()} </td>
                                             <td>
                                             <div className='d-flex justify-content-center col-12'>
                                             <button style={{marginLeft: "10px"}} onClick={ () => this.downloadinput(integration.id)} className="btn btn-link"><i className="fas fa-file-import" style={{ color: "purple" }}></i></button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.ConfirmDelete(integration.id)} className="btn btn-link"><i className="fas fa-trash-alt" style={{ color: "red" }}></i></button>
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
