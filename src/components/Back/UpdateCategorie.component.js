import React, { Component } from "react";
import CategorieService from '../../services/CategorieService';
import swal from 'sweetalert';

export default class UpdateCategorie extends Component {
  constructor(props) {
    super(props);
    this.onChangeLibelle = this.onChangeLibelle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.updateCategorie = this.updateCategorie.bind(this);
    this.getCategorie = this.getCategorie.bind(this);
    

    this.state = {
      currentCategorie: {
        id: null,
        libelle: "",
        description: ""
      
      },
      message: ""
    };
  }
  componentDidMount() {
    
    this.getCategorie( sessionStorage.getItem("idcat"));
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


  getCategorie(id) {
    CategorieService.getCategorieById(id)
      .then(response => {
        this.setState({
          description: response.data.description,
          libelle: response.data.libelle,
          id:response.data.id
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  } 

  updateCategorie() {
    
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
      id: this.state.id,
      description: this.state.description
    };

    CategorieService.updateCategorie(
      categorie,
      categorie.id
      
    )
      .then(response => {
        swal("Catégorie est modifiée avec succés")
          .then((value) => {
            window.location.href = "/categoriesAdmin";

          });
      })
      .catch(e => {
        swal({

          text: "Vérifier votre connexion",
          icon: "warning"
        }
        );
      });
     
      
  }
 
  render() {
    return (

      <div className="submit-form">
        <h2 className="text-center">Modifier catégorie</h2>
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
            <button onClick={this.updateCategorie} className="btn btn-success">
              Valider
            </button>
          </div>
        )}
      </div>
    );
  }
}

