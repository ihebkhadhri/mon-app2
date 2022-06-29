import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import '../../../src/SpinnerLoader.css'
import $ from 'jquery'

export default class Rapport_template extends React.Component {
  constructor(props) {
    super(props);
    this.onpasse = this.onpasse.bind(this);
    this.selectiontemplate = this.selectiontemplate.bind(this);
    this.onUnload = this.onUnload.bind(this);
    this.onprecedent=this.onprecedent.bind(this);

  }


  state = {
    docs: [],
    idtemplate: 0,
    idintegration: '62554e665306a2fc8ae06791'
  }


  onUnload = e => {
    e.preventDefault();
    alert("aa");
  };

  componentDidMount() {


    let hrf = window.location.href.split("/");
    let idi = hrf[hrf.length - 1];

    window.addEventListener("beforeunload", this.onUnload);
    $(".alert-Div").hide();
    $('#loaderr').hide();
    if (sessionStorage.getItem("Token") == null) {
      window.location.href = "/Authentification";
    }

    let categorie_selected = sessionStorage.getItem("Categorie");
    

axios.get("https://localhost:7103/Integration/GetIntegration/" + idi)
      .then(res => {

        categorie_selected=res.data.categorie.id;


    axios.get("https://localhost:7103/Template/AllTemplatesByCategorie/" + categorie_selected)
      .then(res => {


        let listtemplate = (res.data);
        console.log(listtemplate);
        let _docs = [];
        for (let i = 0; i < listtemplate.length; i++) {

          let _listemplateId = listtemplate[i].split("-*-")[0];
          let _listemplateUrlFile = listtemplate[i].split("-*-")[1];
          console.log(_listemplateId);
          console.log(_listemplateUrlFile);

          let _doc = [
            {
              uri: "data:application/pdf;base64, " + encodeURI(_listemplateUrlFile),
              id: _listemplateId
            },

          ];


          _docs.push(_doc);
        }



       

        this.setState({
          docs: _docs,
          idintegration: idi
        })







      })


    })




  }

  selectiontemplate(e) {
    e.preventDefault();

    this.setState({ idtemplate: e.target.id })
    $(".docviewerrr").css("border", "none");
    $('#doc' + e.target.id).css("border", "1px solid rgba(0,136,164,1)");
    $(".alert-Div").hide();
  }

  onprecedent(e){
    axios.delete('https://localhost:7103/Integration/DeleteIntegration/'+this.state.idintegration)
    .then(res=>{
        window.location.href="/Categories"
    })
  }
  onpasse(e) {

    if (this.state.idtemplate == 0) {
      $(".alert-Div").slideDown(2000);
      $(".alert-warnn").html("Vous devez sélectionner une template");
      $(window).scrollTop(0);
      return;
    }


    $('#loaderr').show();

    e.preventDefault();


    let idtemplate = this.state.idtemplate;
    let idIntegration = this.state.idintegration;

    axios.get(`https://localhost:7103/Integration/incrementeetat/`+ this.state.idintegration) .then(res5 => {
    

    var xhr = new XMLHttpRequest();
    xhr.open("GET", `https://localhost:7103/Integration/GetIntegration/` + this.state.idintegration);
    
    xhr.onload = function () {
      if (this.status === 200) {

        let integration = xhr.response;


        var xhrecrire = new XMLHttpRequest();
        xhrecrire.open("PUT", 'https://localhost:7103/Integration/EcrireTemplate/' + idtemplate, integration, false);
        xhrecrire.setRequestHeader("Content-Type", "application/json");


        xhrecrire.onload = function () {
          if (this.status === 200) {

            sessionStorage.setItem("idtemplate", idtemplate);
            window.location.href = "/Rapport/" + idIntegration;




          }
        };
        xhrecrire.send(integration);









      }
    };

    
    xhr.send();

  })





  }


  /* const docs = [
     { uri: require("../../../src/a.pdf") },
     
   ];*/

  render() {
    return (
      <div className="templates">
        <div className="alert-Div alert alert-warning">
          <strong>Warnig!</strong> <span className='alert-warnn'> </span>.
        </div>

        <div id="loaderr" style={{ zIndex: '9999999' }}></div>

        <h4 className='titre'>Ces modèles sont prêts à l’emploi, il ne vous reste alors plus qu’à les compléter et à les adapter selon votre profil</h4>
        <h4 className='titre'> Choisir le modèle qui corresponde le mieux à votre besoin.</h4>




        <div className="row">

          {this.state.docs.map(doc =>
            <div className="col-12 col-lg-4  text-center">
              <DocViewer
              theme={{
                primary: "rgba(0,136,164,1)",
               
               
                
              }}
                className="docviewerrr "
                id={'doc' + doc[0].id}
                pluginRenderers={DocViewerRenderers}
                documents={doc}
                config={{
                  header: {
                    disableHeader: true,
                    disableFileName: true,
                    retainURLParams: false
                  }
                }}
                style={{ height: 500, marginTop:'5%' }}
              />
              <button className="btn-primary2 " style={{ marginTop: "30px", marginBottom: "30px" }} onClick={this.selectiontemplate} id={doc[0].id} > Sélectionner</button>
            </div>
          )}


        </div>

        <div class="d-flex justify-content-center col-12">

          <div className="" style={{ marginRight:"2%" }}>
            <button className="d-inline-flex align-items-center btn-primary3 btn btn-outline-primary border-2 p-2"  onClick={this.onprecedent}>
              <span className="flex-shrink-0 ">
                <i class="fas fa-arrow-alt-circle-left"></i>
              </span>
              <span className="px-3">Précédent</span>
            </button>
          </div>


          <div className="">
            <button className="d-inline-flex align-items-center btn-primary3 btn btn-outline-primary border-2 p-2"  onClick={this.onpasse}>
              <span className="flex-shrink-0 ">
                <i class="fas fa-arrow-alt-circle-right"></i>
              </span>
              <span className="px-3">Suivant</span>
            </button>
          </div>

        </div>

      </div>
    );
  }
}