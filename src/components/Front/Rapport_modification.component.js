import axios from 'axios';

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Rapport_modification.component.css';
import SignaturePad from 'react-signature-canvas'
import { NavLink } from 'react-router-dom';

import styles from './styles.module.css'
var columns = document.querySelectorAll('.donnes');
var draggingClass = 'dragging';
var dragSource;


export default class Rapport_modification extends React.Component {

  constructor(props) {
    super(props);


    this.handleDragStart = this.handleDragStart.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);



    if (sessionStorage.getItem("Token") == null) {
      window.location.href = "/Authentification";
    }

  }


  state = {
    docs: [
      { uri: require("../../Templates Word_pdf/a.pdf") },

    ],
    idintegration: 0
    , integration: Object

  }

  componentDidMount() {




    let hrf = window.location.href.split("/");
    let idi = hrf[hrf.length - 1];

    this.setState({
      idintegration: idi

    })













    var xhr = new XMLHttpRequest();
    var json_obj, status = false;
    xhr.open("GET", 'https://localhost:7103/Integration/GetIntegration/' + idi, true);
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var json_obj = JSON.parse(xhr.responseText);
          sessionStorage.setItem("integration",JSON.stringify(json_obj));
          status = true;
          this.setState({ integration: json_obj });
           
        } else {
          console.error(xhr.statusText);
        }
      }
    }.bind(this);
    xhr.onerror = function (e) {
      console.error(xhr.statusText); 
    };
    xhr.send(null);

    axios.get(`https://localhost:7103/Integration/GetFinalPdf/` + idi)
      .then(res => {
        console.log(res.data);
        this.setState({
          docs: [
            {
              uri: "data:application/pdf;base64, " + encodeURI(res.data)
            }
          ]

        })
        columns = document.querySelectorAll('.donnes');
        console.log(columns);

      })
  }





  handleDragStart(evt) {
    console.log("1")
    console.log(evt.dataTransfer.getData)

    dragSource = evt.target;
    evt.target.classList.add(draggingClass);
    evt.dataTransfer.effectAllowed = 'move';
    evt.dataTransfer.setData('text/html', evt.target.innerHTML);
  }

  handleDragOver(evt) {
    console.log("2")
    evt.dataTransfer.dropEffect = 'move';
    evt.preventDefault();
  }

  handleDragEnter(evt) {
    console.log("3")
    evt.target.classList.add('over');
  }

  handleDragLeave(evt) {
    console.log("4")
    evt.target.classList.remove('over');
  }

  handleDrop(evt) {
    console.log(this.state.integration.age);
    console.log("5")
    evt.stopPropagation();

    if (dragSource !== evt.target) {
      dragSource.innerHTML = evt.target.innerHTML;
      evt.target.innerHTML = evt.dataTransfer.getData('text/html');



      this.state.integration.nom = document.getElementById("nom").innerHTML;
      this.state.integration.prenom = document.getElementById("prenom").innerHTML;
      this.state.integration.age = document.getElementById("age").innerHTML;
      this.state.integration.dateNaissance = document.getElementById("dateNaissance").innerHTML;
      this.state.integration.nationalite = document.getElementById("nationalite").innerHTML;

      console.log(this.state.integration.age);



      let integrationobject = JSON.stringify(this.state.integration);


      

      
      
      
      var xhr = new XMLHttpRequest();
          var json_obj, status = false;
          xhr.open("PUT", 'https://localhost:7103/Integration/EcrireTemplate/' + sessionStorage.getItem("idtemplate"), integrationobject.toString(), false);
      xhr.setRequestHeader("Content-Type", "application/json");
          xhr.onload = function (e) {
            if (xhr.readyState === 4) {
              if (xhr.status === 200) {
              
      
       axios.get(`https://localhost:7103/Integration/GetFinalPdf/` + this.state.integration.id)
                    .then(res => {
                      console.log(res.data);
                      this.setState({
                        docs: [
                          {
                            uri: "data:application/pdf;base64, " + encodeURI(res.data)
                          }
                        ]
      
      
      
      
                      })
      
      
      
                      columns = document.querySelectorAll('.donnes');
                      console.log(columns);
      
      
      
      
      
                    })
      
      
      
      
              } else {
                console.error(xhr.statusText);
              }
            }
          }.bind(this);
          xhr.onerror = function (e) {
            console.error(xhr.statusText);
          };
          xhr.send(integrationobject);
      
    }

    evt.preventDefault();
  }

  handleDragEnd(evt) {
    console.log("6")
    Array.prototype.forEach.call(columns, function (col) {
      ['over', 'dragging'].forEach(function (className) {
        col.classList.remove(className);
      });
    });
  }




  render() {
    return (
      <div className="templates">

        <h4 className='titre'>Editer ou modifier le document final, si nécessaire, puis une fois vous terminez, vous pouvez télecharger votre rapport final</h4>

        <div className=" d-flex justify-content-center" style={{ marginBottom: "20px" }}>
          <div className="progress col-6 ">
            <div className="progress-bar progress-bar-striped w-75 progress-bar-animated bg-warning" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
          </div>

        </div>

        <div className="row">

          <div className="col-5">

            <DocViewer
              pluginRenderers={DocViewerRenderers}
              documents={this.state.docs}
              config={{
                header: {
                  disableHeader: true,
                  disableFileName: false,
                  retainURLParams: false
                }
              }}
              style={{ height: 700 }}
            />

          </div>

          <div className="col-7 mt-5">
          <NavLink to={'/mesarchives'} className="btn btn-primary2" > Terminer </NavLink>
            <ul>

              <li > Mes Données </li>
              <li id="nom" onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} className='donnes' draggable="true" style={{ cursor: 'move' }}>{this.state.integration.nom} </li>
              <li id="prenom" onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} className='donnes' draggable="true" style={{ cursor: 'move' }}>{this.state.integration.prenom} </li>
              <li id="age" onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} className='donnes' draggable="true" style={{ cursor: 'move' }}>{this.state.integration.age} </li>
              <li id="dateNaissance" onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} className='donnes' draggable="true" style={{ cursor: 'move' }}>{this.state.integration.dateNaissance} </li>
              <li id="nationalite" onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} className='donnes' draggable="true" style={{ cursor: 'move' }}>{this.state.integration.nationalite} </li>
              <li onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} className='donnes' draggable="true" style={{ cursor: 'move' }}>{this.state.integration.sex} </li>
              <li onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} className='donnes' draggable="true" style={{ cursor: 'move' }}>{this.state.integration.prixUnitaire} </li>
              <li onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd} onDragOver={this.handleDragOver} onDragEnter={this.handleDragEnter} onDragLeave={this.handleDragLeave} onDrop={this.handleDrop} className='donnes' draggable="true" style={{ cursor: 'move' }}>{this.state.integration.adresse} </li>

              <h4>Liste des titres</h4>

              {
                this.state.integration.titres != null ?
                  this.state.integration.titres.map((p) => <li >{p.libelle} <ul>
                    {p.sous_titres.map((soustitre) => <li >{soustitre.libelle}</li>)}
                  </ul>
                  </li>
                  )

                  :
                  null
              }
              <h4>Liste des paragraphes</h4>
              {
                this.state.integration.paragraphes != null ?
                  this.state.integration.paragraphes.map((p) => <li >{p.libelle} <ul>
                    {p.sous_paragraphe.map((sousparagraphe) => <li >{sousparagraphe.libelle}</li>)}
                  </ul>
                  </li>
                  )

                  :
                  null
              }

              <h4>Liste des tableaux</h4>
              {
                this.state.integration.tableaux != null ?
                  this.state.integration.tableaux.map((p) => <li >{p.libelle} <ul>
                    {p.lignes.map((ligne, index) => <li > Ligne:{index + 1}<ul>
                      {ligne.colonnes.map((c) => <li >{c.libelle}</li>)}
                    </ul></li>)}
                  </ul>
                  </li>
                  )

                  :
                  null
              }

              <li>
             {/*  <CanvasSignature/> */}
              </li>
            </ul>
       
  
   
          </div>

        </div>
      </div>
    );
  }
}
/* class CanvasSignature extends React.Component {
  state = {trimmedDataURL: null}
  sigPad = {}
  clear = () => {
    this.sigPad.clear()
  }
  
  trim = () => {
    console.log(this.sigPad.getTrimmedCanvas().toDataURL('image/png'))
    this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
      .toDataURL('image/png')})
      
      let theintegration=JSON.parse(sessionStorage.getItem("integration"));
      console.log(this.state.trimmedDataURL);
      theintegration.signature = this.sigPad.getTrimmedCanvas().toDataURL('image/png');
      
      let integrationobject = JSON.stringify(theintegration);
      console.log(integrationobject);
      var xhr = new XMLHttpRequest();
      var json_obj, status = false;
      xhr.open("PUT", 'https://localhost:7103/Integration/EcrireSignature/' + sessionStorage.getItem("idtemplate"), integrationobject.toString(),this.state.trimmedDataURL, false);
  xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onload = function (e) {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
          
  
   axios.get(`https://localhost:7103/Integration/GetFinalPdf/` + sessionStorage.getItem("integration").id)
                .then(res => {
                  console.log(res.data);
                  this.setState({
                    docs: [
                      {
                        uri: "data:application/pdf;base64, " + encodeURI(res.data)
                      }
                    ]
  
  
  
  
                  })
  
  
  
                  columns = document.querySelectorAll('.donnes');
                  console.log(columns);
  
                })
  
  
  
  
          } else {
            console.error(xhr.statusText);
          }
        }
      }.bind(this);
      xhr.onerror = function (e) {
        console.error(xhr.statusText);
      };
      xhr.send(integrationobject);
  }
  render () {
    let {trimmedDataURL} = this.state
    return <div className={styles.container}>
      <div id="c" className={styles.sigContainer}>
        <SignaturePad canvasProps={{className: styles.sigPad}}
          ref={(ref) => { this.sigPad = ref }} />
      </div>
      <div>
        <button className={styles.buttons} onClick={this.clear}>
          Clear
        </button>
        <button className={styles.buttons} onClick={this.trim}>
          Générer signature
        </button>
      </div>
      {trimmedDataURL
        ? <img id="i" className={styles.sigImage}
          src={trimmedDataURL} />
        : null}
    </div>
  } 
}*/