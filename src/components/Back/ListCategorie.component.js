import React, { Component } from 'react'
import { Link } from "react-router-dom";
import CategorieService from '../../services/CategorieService'
import './../../jquery.dataTables.min.css'
import $ from 'jquery';

$.DataTable = require('datatables.net');
class ListCategorie extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
                categories: []
        }
       
        this.editCategorie = this.editCategorie.bind(this);
        this.deleteCategorie = this.deleteCategorie.bind(this);
    }

    deleteCategorie(id){
        CategorieService.deleteCategorie(id).then( res => {
            this.setState({categories: this.state.categories.filter(categorie => categorie.id !== id)});
        });
        alert("Categorie supp avec succées");
    }
   
    editCategorie(id){
        sessionStorage.setItem("idcat",id);
        window.location.href =`/UpdateCategorie/`;
    }

    componentDidMount(){
        CategorieService.getCategories().then((res) => {
            this.setState({ categories: res.data});
             $('#dt').DataTable({ "pagingType": "full_numbers" });
        $('.dataTables_length').addClass('bs-select');
        });
       
    }

 

    render() {
        return (
            <div>
                
                 <h2 className="text-center">Categories List</h2>
                 <div className = "">
                 <button className="btn btn-info"> 
                    <Link to={"/AddCategorie"} className="nav-link">Add </Link>
                 </button>
                    
                 </div>
                 <br></br>
                 <div className = "row">
                        <table id="dt" className = "table table-striped table-bordered">

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
                                        <tr key = {categorie.id}>
                                             <td> {categorie.libelle} </td>   
                                             <td> {categorie.description}</td>
                                             <td>
                    
                                                
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.editCategorie(categorie.id)} className="btn btn-danger">Update </button>
                                                 
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCategorie(categorie.id)} className="btn btn-danger">Delete </button>
                                                 
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