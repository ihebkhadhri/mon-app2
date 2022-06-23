import React from 'react';

import axios from 'axios';
import $ from 'jquery';

export default class Categorie extends React.Component {

  constructor(props) {
    super(props);
    this.saveFileWordSelected = this.saveFileWordSelected.bind(this);
    this.saveFilePdfSelected = this.saveFilePdfSelected.bind(this);
    this.changeCategorie=this.changeCategorie.bind(this);
    this.importFile = this.importFile.bind(this);

    if (sessionStorage.getItem("Token") == null) {
      window.location.href = "/Authentification";
    }

  }

  state = {
    categories: [],
    filex: [],
    categorie_selected:null,

  }

  changeCategorie(event){
    $('option[value="0"]').attr("disabled", "disabled");
    this.setState({categorie_selected: event.target.value});
    console.log("***********"+event.target.value);

}


  saveFileWordSelected(e) {

    console.log(e.target.files[0]);

    this.state.filex.push(e.target.files[0])





  };


  saveFilePdfSelected(e) {

    console.log(e.target.files[0]);

    this.state.filex.push(e.target.files[0])

  };


  importFile = (e) => {
    const formData = new FormData();


    for (let i = 0; i < this.state.filex.length; i++) {
      formData.append("files", this.state.filex[i]);
    }


    try {
      console.log("***********"+this.state.categorie_selected);
      const res = axios.post("https://localhost:7103/Template/AddTemplate/"+this.state.categorie_selected, formData).then(res => {

        console.log(res.data);
        window.location.href = "/AllTemplate";
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  componentDidMount() {

    axios.get(`https://localhost:7103/Categorie/GetAll/`)
      .then(res => {

        const categories = res.data;

        this.setState({ categories });
      })
  }

  render() {
    return (
      <div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-primary2 text-center p-5">
              <h1 className="mb-4">Nouvelle Template</h1>
              <form>
                <div className="row g-3">



                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input accept=".rtf" className="form-control border-0" required type="file" onChange={this.saveFileWordSelected} />
                      <label htmlFor="cage" >Fichier Word</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input accept="application/pdf" className="form-control border-0" required type="file" onChange={this.saveFilePdfSelected} />
                      <label htmlFor="message"> Fichier Pdf</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div >
                      <label htmlFor="cage" style={{ color: 'gray' }}> Sélectionner Catégorie</label>
                      <select  onChange={this.changeCategorie} className="form-control border-0 form-control form-control-warning">
                        <option value="0" style={{ textAlign:'center' }}> --catégories--</option>
                        {this.state.categories.map(categorie => <option value={categorie.id} >{categorie.libelle}</option>)}
                      </select>

                    </div>
                  </div>

                  <div className="col-12">


                    <input type="button" value="upload" onClick={this.importFile} className="btn btn-dark w-100 py-3" />

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}