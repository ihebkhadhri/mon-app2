import React from 'react';

import axios from 'axios';
import $ from 'jquery';

export default class Categorie extends React.Component {

  constructor(props) {
    super(props);
    this.saveFileSelected = this.saveFileSelected.bind(this);
    this.importFile = this.importFile.bind(this);
    this.changeCategorie = this.changeCategorie.bind(this);
    this.nomrapport = this.nomrapport.bind(this);




    if (sessionStorage.getItem("Token") == null) {
      window.location.href = "/Authentification";
    }




  }

  state = {
    categories: [],
    filex: null,
    categorie_selected: "",
    nompdf: ""
  }

  changeCategorie(event) {
    $(".alert-Div").slideUp();
    $('option[value="0"]').attr("disabled", "disabled");
    this.setState({ categorie_selected: event.target.value });


  }

  nomrapport(event) {
    this.setState({ nompdf: event.target.value });
  }

  saveFileSelected(e) {
    $(".alert-Div").slideUp();


    this.setState({
      filex: e.target.files[0]
    }
    )


  };


  importFile = (e) => {

    if (this.state.filex == null) {
      $(".alert-Div").slideDown(2000);
      $(".alert-warnn").html("Vous devez sélectionner un fichier");

      return
    }

    if (this.state.categorie_selected == "") {
      $(".alert-Div").slideDown(2000);
      $(".alert-warnn").html("Vous devez sélectionner une catégorie");

      return;
    }



    const formData = new FormData();
    formData.append("file", this.state.filex);
    try {
      const res = axios.post("https://localhost:7103/Integration/AddIntegration/" + this.state.categorie_selected + "/" + this.state.nompdf, formData).then(res => {

        window.location.href = "/Templates/" + res.data;
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  componentDidMount() {

    sessionStorage.removeItem("Categorie");

    $(".alert-Div").hide();



    axios.get(`https://localhost:7103/Categorie/GetAll/`)

      .then(res => {

        const categories = res.data;

        this.setState({ categories });
      })
  }

  render() {
    return (
      <div>
        <div className="alert-Div alert alert-warning">
          <strong>Warnig!</strong> <span className='alert-warnn'> </span>.
        </div>
        <h4 className='titre'>Image conversion prend habituellement quelques secondes. Convertir xml à pdf très rapidement.</h4>
        <h4 className='titre'>Il suffit à déposer vos fichiers xml sur la page et choisir la catégorie pour convertir pdf.</h4>


        <div className="row g-4 justify-content-center" style={{ marginTop: '20px' }}>
          <div className="col-lg-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-primary2 text-center p-5">
              <h1 className="mb-4" style={{ color: 'white' }}>sélectionnez un fichier xml que vous souhaitez convertir</h1>
              <form>
                <div className="row g-3">



                  <div className="col-sm-12">
                    <div className="form-floating">
                      <input className="form-control border-0" accept="text/xml" required type="file" onChange={this.saveFileSelected} />
                      <label htmlFor="cage">Importer votre fichier</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">


                      <input className="form-control border-0" required type="text" onChange={this.nomrapport} />
                      <label htmlFor="cage" >  Choisir Un nom de rapport </label>
                    </div>
                  </div>


                  <div className="col-12">
                    <div >
                      <label htmlFor="cage" style={{ color: 'white' }}> Sélectionner Catégorie</label>
                      <select onChange={this.changeCategorie} className="form-control border-0 form-control form-control-warning">
                        <option value="0" style={{ textAlign: 'center' }}> --catégories--</option>
                        {this.state.categories.map(categorie => <option value={categorie.id} >{categorie.libelle}</option>)}
                      </select>

                    </div>
                  </div>
                  <div className="col-12">

                    <input type="button" className="btn btn-dark w-100 py-3" value="Charger" onClick={this.importFile} />

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