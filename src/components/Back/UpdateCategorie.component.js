import React, { Component } from "react";
import CategorieService from '../../services/CategorieService'
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
  getCategorie(id) {
    CategorieService.getCategorieById(id)
      .then(response => {
        this.setState({
          currentCategorie: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateCategorie() {
    console.log( this.state.currentCategorie.id)
    CategorieService.updateCategorie(
      this.state.currentCategorie,
      this.state.currentCategorie.id
      
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The category was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
      alert("Update successfully");
      window.location.href = "/categoriesAdmin";
  }
 
  render() {

         const { currentCategorie } = this.state;
      return (
      <div>
        {currentCategorie ? (
          <div className="edit-form">
            <h4>Categorie</h4>
            <form>
              <div className="form-group">
                <label htmlFor="title">Libelle</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  value={currentCategorie.libelle}
                  onChange={this.onChangeLibelle}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  value={currentCategorie.description}
                  onChange={this.onChangeDescription}
                />
              </div>
             
            </form>
       
            
            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updateCategorie}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on Categorie...</p>
          </div>
        )}
      </div>
    );
  }
}
