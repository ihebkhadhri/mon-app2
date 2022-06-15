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
  }


  state = {
    docs: [],
    idtemplate: 0,
    idintegration: '62554e665306a2fc8ae06791'
  }


  componentDidMount() {

    $(".alert-Div").hide();
    $('#loaderr').hide();
    if (sessionStorage.getItem("Token") == null) {
      window.location.href = "/Authentification";
    }

   let categorie_selected= sessionStorage.getItem("Categorie");
   


    axios.get("https://localhost:7103/Template/AllTemplatesByCategorie/"+categorie_selected)
    .then(res => {
       

        let listtemplate = (res.data);
        console.log(listtemplate);
        let _docs = [];
        for (let i = 0; i < listtemplate.length; i++) {

          let _listemplateId=listtemplate[i].split("-*-")[0];
          let _listemplateUrlFile=listtemplate[i].split("-*-")[1];
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



        let hrf = window.location.href.split("/");
        let idi = hrf[hrf.length - 1];

        this.setState({
          docs: _docs,
          idintegration: idi
        })

        
        

      
      
      
    })


   




  }

  selectiontemplate(e) {
    e.preventDefault();

    this.setState({ idtemplate: e.target.id })
    $(".docviewerrr").css("border","none");
    $('#doc'+e.target.id).css("border","1px solid #F3BD00");
    $(".alert-Div").hide();
  }

  onpasse(e) {

    if(this.state.idtemplate==0){
      $(".alert-Div").slideDown(2000);
      $(".alert-warnn").html("Vous devez sélectionner une template");
      $(window).scrollTop(0);
      return;
    }


    $('#loaderr').show();

    e.preventDefault();


    let idtemplate=this.state.idtemplate;
    let idIntegration=this.state.idintegration;
    
    var xhr = new XMLHttpRequest();
        xhr.open("GET", `https://localhost:7103/Integration/GetIntegration/` + this.state.idintegration);


        xhr.onload = function () {
            if (this.status === 200) {

                let integration= xhr.response;


              var xhrecrire = new XMLHttpRequest();
              xhrecrire.open("PUT", 'https://localhost:7103/Integration/EcrireTemplate/' + idtemplate,integration, false);
              xhrecrire.setRequestHeader("Content-Type", "application/json");

      
              xhrecrire.onload = function () {
                  if (this.status === 200) {
      
      
                    window.location.href = "/Rapport/" + idIntegration;
      
      
                    
      
                  }
              };
              xhrecrire.send(integration);




               




            }
        };
        xhr.send();





    

  }


  /* const docs = [
     { uri: require("../../../src/a.pdf") },
     
   ];*/

  render() {
    return (
      <div className="templates">
         <div class="alert-Div alert alert-warning">
          <strong>Warnig!</strong> <span className='alert-warnn'> </span>.
        </div>
        
        <div id="loaderr" style={{zIndex:'9999999'}}></div>

        <h4 className='titre'>Ces modèles sont prêts à l’emploi, il ne vous reste alors plus qu’à les compléter et à les adapter selon votre profil</h4>
        <h4 className='titre'> Choisir le modèle qui corresponde le mieux à votre besoin.</h4>
        
        <div className=" d-flex justify-content-center" style={{ marginBottom: "20px" }}>
          <div className="progress col-6 ">
            <div className="progress-bar progress-bar-striped w-50 progress-bar-animated bg-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

        </div>
        
        
        <div className="row">

          {this.state.docs.map(doc =>
            <div className="col-12 col-lg-4  text-center">
              <DocViewer
              className="docviewerrr"
              id={'doc'+doc[0].id}
                pluginRenderers={DocViewerRenderers}
                documents={doc}
                config={{
                  header: {
                    disableHeader: false,
                    disableFileName: true,
                    retainURLParams: false
                  }
                }}
                style={{ height: 500 }}
              />
              <button className="btn-primary2 " style={{ marginTop:"30px",marginBottom:"30px" }} onClick={this.selectiontemplate} id={doc[0].id} > Sélectionner</button>
            </div>
          )}


        </div>
       
        <div>
          <button onClick={this.onpasse} style={{ color: "#CA300A", fontWeight: "bold" }} > Suivant </button>
        </div>
        
      </div>
    );
  }
}