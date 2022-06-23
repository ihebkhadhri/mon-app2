import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

import './../../jquery.dataTables.min.css'

$.DataTable = require('datatables.net');


export default class Validategroup extends React.Component {
    constructor(props) {
        super(props);
        this.validate = this.validate.bind(this);
    }

    state = {
       
       
        groups: []
    
      }

     


      validate(id) {
        axios.put(`https://localhost:7103/Token/validategroup/`+id)
      .then(res => {window.location.reload() ;
      
    }
      )
      }

    componentDidMount() {
    axios.get(`https://localhost:7103/Token/Getgroup/`)
      .then(res => { console.log(res.data);
        this.setState({groups:res.data,
          
        }) ; $('#dt').DataTable({"pagingType": "full_numbers"});
        $('.dataTables_length').addClass('bs-select');
        
    }
      )

      
    }

    render() {
        return (
            <div className="groups">
            <h2>Les groupes non validés</h2>
            <table id="dt" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%" >
               
               <thead>
                <tr>
                    
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Action</th>

                </tr>
                </thead>

                <tbody>
                    {this.state.groups.map((item, index) => {
                        return (
                            <tr>
                                
                                <th>{item.firstName}</th>
                                <th>{item.lastName}</th>
                                <th>{item.email}</th>
                                

                                <th>
                                    <button title='Valider utilisateur' className="btn-link" onClick={() => this.validate(item.id)}><i style={{ color:"green" }} className="fas fa-check-circle"></i></button>
                                    
                                    </th>
                            </tr>
                        )
                    })}
                </tbody>

            </table>

        </div>

        );}
}