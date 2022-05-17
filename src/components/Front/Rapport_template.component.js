import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



export default class Rapport_template extends React.Component  {

  state = {
    docs: []
  }


  componentDidMount() {
    
    axios.get(`https://localhost:7103/Template/AllTemplatesByCategorie/`)
      .then(res => {
       
        const _doc = [
          { uri: require("../../Templates Word_pdf/a.pdf") },
          
        ];

        const _docs=[];
        _docs.push(_doc);

        console.log(_docs);

        this.setState({
          docs:_docs
        }
        )

        

      })
  
    }

 /* const docs = [
    { uri: require("../../../src/a.pdf") },
    
  ];*/

  render() {
  return (
    <div className="templates">
      
      <div className="row">
        
      { this.state.docs.map(doc =>
      <div className="col-3">
        <DocViewer
        pluginRenderers={DocViewerRenderers}
        documents={doc}
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
        )}


</div>
    </div>
  );
}
}