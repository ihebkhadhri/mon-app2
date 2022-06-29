import React from 'react';

import axios from 'axios';
import $ from 'jquery';

export default class Reimportfile extends React.Component {

  constructor(props) {
    super(props);
    
    this.importFile = this.importFile.bind(this);
    this.changeCategorie = this.changeCategorie.bind(this);



    if (sessionStorage.getItem("Token") == null) {
      window.location.href = "/Authentification";
    }


    

  }

  state = {
    categories: [],
    nompdf:"",
    categorie_selected: "",
  }

  nomrapport(event){
    this.setState({ nompdf: event.target.value });
  }

  changeCategorie(event) {
    $('option[value="0"]').attr("disabled", "disabled");
    this.setState({ categorie_selected: event.target.value });


  }


  


  importFile = (e) => {
    if(this.state.categorie_selected==""){
      $(".alert-Div").slideDown(2000);
      $(".alert-warnn").html("Vous devez sélectionner une catégorie");
      $(".alert-Div").slideUp(10000);
      return;
    }



   
    try {
      const res = axios.post("https://localhost:7103/Integration/AddIntegrationbyidxmlfile/"+sessionStorage.getItem("idinputfile")+"/"+this.state.categorie_selected+"/"+"/"+this.state.nompdf).then(res => {
       
        console.log(res.data);
        window.location.href = "/Templates/" + res.data;
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  componentDidMount() {

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
        <div class="alert-Div alert alert-warning">
          <strong>Warnig!</strong> <span className='alert-warnn'> </span>.
        </div>
        <h4 className='titre'>Image conversion prend habituellement quelques secondes. Convertir xml à pdf très rapidement.</h4>
        <h4 className='titre'>Vos données sont déjà là !Il suffit de choisir la catégorie pour convertir pdf.</h4>

        <div className=" d-flex justify-content-center" style={{ marginBottom: "20px" }}>
          <div className="progress col-6 ">
            <div className="progress-bar progress-bar-striped w-25 progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

        </div>

        <div class="row g-4 justify-content-center">
          <div className="col-lg-5 my-6 mb-0 wow fadeInUp" data-wow-delay="0.1s">
            <div className="bg-primary2 text-center p-5">
              
              <form>
                <div className="row g-3">


                <div className="col-12">
                    <div className="form-floating">


                      <input className="form-control border-0" required type="text" onChange={this.nomrapport} />
                      <label htmlFor="cage" >  Choisir Un nom de rapport </label>
                    </div>
                  </div>



                  
                  <div className="col-12">
                    <div >
                      <label htmlFor="cage" style={{ color: 'gray' }}> Sélectionner Catégorie</label>
                      <select onChange={this.changeCategorie} className="form-control border-0 form-control form-control-warning">
                        <option value="0" style={{ textAlign: 'center' }}> --catégories--</option>
                        {this.state.categories.map(categorie => <option value={categorie.id} >{categorie.libelle}</option>)}
                      </select>

                    </div>
                  </div>
                  
                  <div className="col-12">

                    <input type="button" className="btn btn-dark w-100 py-3" value="upload" onClick={this.importFile} />

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