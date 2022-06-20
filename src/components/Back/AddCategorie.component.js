import React, { Component } from "react";
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
    var categorie = {
      libelle: this.state.libelle,
      description: this.state.description
    };
    CategorieService.createCategorie(categorie)
      .then(response => {
        this.setState({
          id: response.categorie.id,
          libelle: response.categorie.libelle,
          description: response.categorie.description
         
        });
        console.log(response.categorie);
      })
      .catch(e => {
        console.log(e);
      });
      alert("Categorie ajouter avec succées");
      window.location.href = "/categoriesAdmin";
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
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
    
