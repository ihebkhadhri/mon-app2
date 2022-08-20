import React, { Component } from "react";
import swal from 'sweetalert';
import CategorieService from '../../services/CategorieService'
export default class AddCategorie extends Component {

  constructor(props) {
    super(props);
    this.onChangeLibelle = this.onChangeLibelle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveCategorie = this.saveCategorie.bind(this);
    this.newCategorie = this.newCategorie.bind(this);
    this.state = {
      id: null,
      libelle: "",
      description: "",
      submitted: false
    };
  }
  onChangeLibelle(e) {
    this.setState({
      libelle: e.target.value
    });
  }
  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }
  saveCategorie() {

    if (this.state.libelle == "") {
      swal({

        text: "Veuillez remplir le champ libelle",
        icon: "warning"
      }
      );
      return;
    }

    if (this.state.description == "") {
      swal({

        text: "Veuillez remplir le champ description",
        icon: "warning"
      }
      );
      return;
    }

    var categorie = {
      libelle: this.state.libelle,
      description: this.state.description
    };
    CategorieService.createCategorie(categorie)
      .then(response => {
        swal("Catégorie ajoutée avec succés")
          .then((value) => {
            window.location.href = "/categoriesAdmin";

          });
      })
      .catch(e => {
        console.log(e);
      });


  }
  newCategorie() {
    this.setState({
      id: null,
      libelle: "",
      description: ""
    });
  }

  render() {
    return (

      <div className="submit-form">
        <h2 className="text-center">Ajouter catégorie</h2>
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newCategorie}>
              Add
            </button>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Libelle</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.libelle}
                onChange={this.onChangeLibelle}
                name="title"
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            <button onClick={this.saveCategorie} className="btn btn-success">
              Ajouter
            </button>
          </div>
        )}
      </div>
    );
  }
}

