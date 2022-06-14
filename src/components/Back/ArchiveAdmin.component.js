import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

import './../../jquery.dataTables.min.css'

$.DataTable = require('datatables.net');


export default class ArchiveAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }

    state = {
       
       
         archives: []
    
      }

      download(id){
        axios.get(`https://localhost:7103/Archive/Downloadarchive/`+id)
        .then(res => { let pdfWindow = window.open("")
        pdfWindow.document.write(
            "<iframe width='100%' height='100%' src='data:application/pdf;base64, " +
            encodeURI(res.data) + "'></iframe>"
        )

        
      }
        )
      }


      delete(id) {
        axios.delete(`https://localhost:7103/Archive/Deletearchive/`+id)
      .then(res => {window.location.reload() ;
      
    }
      )
      }

    componentDidMount() {
    axios.get(`https://localhost:7103/Archive/AllArchives/`)
      .then(res => { console.log(res.data);
        this.setState({archives:res.data,
          
        }) ; $('#dt').DataTable({"pagingType": "full_numbers"});
        $('.dataTables_length').addClass('bs-select');
        
    }
      )

      
    }

    render() {
        return (
            <div className="archives">
            <h2>Tous les archives</h2>
            <table id="dt" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%" >
               
               <thead>
                <tr>
                    
                    <th>Nom Fichier</th>
                    <th>Utilisateur</th>
                    <th>Date de dépot</th>
                    <th>Action</th>

                </tr>
                </thead>

                <tbody>
                    {this.state.archives.map((item, index) => {
                        return (
                            <tr>
                                
                                <th>{item.id}.pdf</th>
                                <th>elee</th>
                                <th>{item.created}</th>

                                <th>
                                    <button className="btn-link" onClick={() => this.download(item.id)}><i className="fas fa-download"></i></button>
                                    <button className="btn-link" onClick={() =>this.delete(item.id)}><i className="fas fa-trash-alt" style={{ color:"red"}}></i></button>
                                    </th>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>

        );}
}