import React, { Component } from "react";
import CategorieService from '../../services/CategorieService'
export default class UpdateCategorie extends Component {
  
    constructor(props) {
    super(props);
    this.onChangeLibelle = this.onChangeLibelle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.getCategorie = this.getCategorie.bind(this);
    this.updateCategorie = this.updateCategorie.bind(this);
    this.state = {
        currentCategorie: {
            id: null,
            libelle: "",
            description: "",
            submitted: false
        },
        message: ""
    };
  }
  componentDidMount() {
    this.getCategorie(this.props.match.params.id);
  }
  onChangeLibelle(e) {
    const libelle = e.target.value;
    this.setState(function(prevState) {
      return {
        currentCategorie: {
          ...prevState.currentCategorie,
          libelle: libelle
        }
      };
    });
  }
  onChangeDescription(e) {
    const description = e.target.value;
    
    this.setState(prevState => ({
      currentCategorie: {
        ...prevState.currentCategorie,
        description: description
      }
    }));
  }
  getCategorie(categorieId) {
    CategorieService.getCategorieById(categorieId)
      .then(response => {
        this.setState({
        currentCategorie: response.categorieId
        });
        console.log(response.categorieId);
      })
      .catch(e => {
        console.log(e);
      });
  }
  updateTutorial() {
    CategorieService.updateCategorie(
      this.state.currentCategorie.id,
      this.state.currentCategorie
    )
      .then(response => {
        console.log(response.categorie);
        this.setState({
          message: "The tutorial was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
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
                
                value={this.setState.currentCategorie.libelle}
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
                
                value={this.setState.currentCategorie.description}
                onChange={this.onChangeDescription}
                name="description"
              />
            </div>
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateCategorie}
            >
              Update
            </button>
          </div>
        )}
      </div>
    );
  }
}
    

