import axios from 'axios';

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class Rapport_modification extends React.Component {
state = {
    docs: [
        { uri: require("../../Templates Word_pdf/a.pdf") },
        
      ], integration:Object

  }

  componentDidMount() {
    if(sessionStorage.getItem("Token")==null)
{
  window.location.href="Authentification";
}
    
    axios.get(`https://localhost:7103/Integration/GetIntegration/6282b830f26a1f053db98c86`)
      .then(res => { console.log(res.data);
        this.setState({integration:res.data})
        
        
      })
  }




  render() {
    return (
      <div className="templates">
        
        <div className="row">
          
        <div className="col-8">

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
          style={{ height: 500 }}
        />
        
  </div>
          
   <div className ="col-4">
   <ul>
   
   
    <li>{this.state.integration.nom} </li>
    <li>{this.state.integration.prenom} </li>
    <li>{this.state.integration.age} </li>
    <li>{this.state.integration.nationalite} </li>
        
    
</ul>

     
   </div>
  
  </div>
      </div>
    );
  }
  }