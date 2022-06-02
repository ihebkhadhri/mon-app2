import axios from 'axios';

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Rapport_modification extends React.Component {

  constructor(props) {
    super(props);


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







    axios.get(`https://localhost:7103/Integration/GetIntegration/` + idi)
      .then(res => {
        console.log(res.data);
        this.setState({
          integration: res.data,
          docs: [
            { uri: require("../../Templates Word_pdf/" + idi + ".pdf") },

          ]
        })


      })
  }




  render() {
    return (
      <div className="templates">

        <div className="row">

          <div className="col-5">

            <DocViewer
              pluginRenderers={DocViewerRenderers}
              documents={this.state.docs}
              config={{
                header: {
                  disableHeader: false,
                  disableFileName: false,
                  retainURLParams: false
                }
              }}
              style={{ height: 700 }}
            />

          </div>

          <div className="col-7 mt-5">
            <ul>

              <li> Mes Données </li>
              <li draggable="true" style={{cursor:'move'}}>{this.state.integration.nom} </li>
              <li draggable="true">{this.state.integration.prenom} </li>
              <li draggable="true">{this.state.integration.age} </li>
              <li draggable="true">{this.state.integration.nationalite} </li>

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
                    {p.lignes.map((ligne,index) => <li > Ligne:{index+1}<ul>
                      {ligne.colonnes.map((c) => <li >{ c.libelle}</li>)}
                      </ul></li>)}
                  </ul>
                  </li>
                  )

                  :
                  null
              }

            </ul>


          </div>

        </div>
      </div>
    );
  }
}