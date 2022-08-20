import React, { Component } from 'react'
import { Link } from "react-router-dom";
import UserService from '../../services/UserService'
import $ from 'jquery';
import swal from 'sweetalert';


$.DataTable = require('datatables.net');
class ListUser extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            users: []
        }

        this.deleteUser = this.deleteUser.bind(this);
        this.JSalert = this.JSalert.bind(this);
    }

    JSalert(id) {

        swal({
            title: "Confirmez-vous?",
            text: "Voulez-vous vraiment supprimer cet utilisateur?",
            icon: "warning",
            buttons: {
                supprimer: "Supprimer",

                Annuler: "Annuler",
            },
        })
            .then((value) => {
                if (value == "supprimer") {
                    this.deleteUser(id);

                    swal("Utilisateur supprimée avec succés");
                }



            });
    }

    deleteUser(id) {
        UserService.deleteUser(id).then(res => {
            this.setState({ users: this.state.users.filter(user => user.id !== id) });
        });
    }


    componentDidMount() {
        UserService.getUsers().then((res) => {
            this.setState({ users: res.data });
            $('#dt').DataTable({
                "pagingType": "full_numbers", "language": {
                    "url": "//cdn.datatables.net/plug-ins/9dcbecd42ad/i18n/French.json"
                }
            }); $('.dataTables_length').addClass('bs-select');
        });
    }

    render() {
        return (
            <div>
                <h2 className="text-center">List Utilisateurs</h2>
                <br></br>
                <div className="row">
                    <table id="dt" className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> FirstName</th>
                                <th> LastNAme</th>
                                <th> Username</th>
                                <th> Email</th>
                                <th> Role</th>


                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td> {user.firstName} </td>
                                            <td> {user.lastName}</td>
                                            <td> {user.username} </td>
                                            <td> {user.email}</td>
                                            <td> {user.userRole} </td>

                                            {user.userRole != "Administrateur" ?
                                                <td>

                                                    <button title="supprimer utilisateur" className="btn-link" onClick={() => this.JSalert(user.id)}><i className="fas fa-trash-alt" style={{ color: "red" }}></i></button>
                                                </td>
                                                : <td></td>
                                            }
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

export default ListUser