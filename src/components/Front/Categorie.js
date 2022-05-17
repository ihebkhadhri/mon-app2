import React from 'react';

import axios from 'axios';

export default class Categorie extends React.Component {
  
  constructor(props) {
    super(props);
    this.saveFileSelected = this.saveFileSelected.bind(this);
    this.importFile = this.importFile.bind(this);
    

  }
  
  state = {
    categories: [],
    filex:null,
  }


   saveFileSelected (e)  {
  
    console.log(e.target.files[0]);

    this.setState({
      filex: e.target.files[0]
    }
    )

   
  };


   importFile=  (e) => {
    const formData = new FormData();
    formData.append("file", this.state.filex);
    try {
      const res =  axios.post("https://localhost:7103/Integration/AddIntegration", formData).then(res => { 
     
        console.log(res.data);
        window.location.href = "/Templates/"+res.data.id;
      });
    } catch (ex) {
      console.log(ex);
    }
  };

  componentDidMount() {
    
    axios.get(`https://localhost:7103/Categorie/GetCategorie/`)
      .then(res => {
        
        const categories = res.data;
        
        this.setState({ categories });
      })
  }

  render() {
    return (
      <div>
         <input type="file" onChange={this.saveFileSelected} />
        <select>
      { this.state.categories.map(categorie => <option>{categorie.libelle}</option>)}
    </select>
    <input type="button" value="upload" onClick={this.importFile} />

    </div>
      
    )
  }
}