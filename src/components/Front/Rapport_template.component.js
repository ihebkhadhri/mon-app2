import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';


export default class Rapport_template extends React.Component {
  constructor(props) {
    super(props);
    this.onpasse = this.onpasse.bind(this);
    this.selectiontemplate = this.selectiontemplate.bind(this);
  }

  state = {
    docs: [],
    idtemplate: 0,
    idintegration:'62554e665306a2fc8ae06791'
  }


  componentDidMount() {

    axios.get(`https://localhost:7103/Template/AllTemplatesByCategorie/`)
      .then(res => {
        console.log(res.data);
        const _docs = [];
        for (let i = 0; i < res.data.length; i++) {

          let _doc = [
            {
              uri: require("../../../src/Templates Word_pdf/" + res.data[i].nom + ".pdf"),
              id: res.data[i].id
            },

          ];


          _docs.push(_doc);
        }


        this.setState({
          docs: _docs
        }
        )



      })

  }

  selectiontemplate(e) {
    e.preventDefault();
    this.setState({idtemplate:e.id})
  }

  onpasse(e) {
    e.preventDefault();

    axios.get(`https://localhost:7103/Template/EcrireTemplate/`)
    .then(res => { 


    });

  }

  /* const docs = [
     { uri: require("../../../src/a.pdf") },
     
   ];*/

  render() {
    return (
      <div className="templates">

        <h3 style={{ textAlign: 'center' }}>Ces modèles sont prêts à l’emploi, il ne vous reste alors plus qu’à les compléter et à les adapter selon votre profil. Choisir le modèle qui corresponde le mieux à votre besoin.</h3>
        <div className="row">

          {this.state.docs.map(doc =>
            <div className="col-4">
              <DocViewer
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
              <button onChange={this.selectiontemplate} id={doc[0].id} > Sélectionner</button>
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