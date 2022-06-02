import React from 'react';

import axios from 'axios';

export default class Categorie extends React.Component {
  
  constructor(props) {
    super(props);
    this.saveFileWordSelected = this.saveFileWordSelected.bind(this);
    this.saveFilePdfSelected = this.saveFilePdfSelected.bind(this);
    this.importFile = this.importFile.bind(this);
    
    if(sessionStorage.getItem("Token")==null)
{
  window.location.href="/Authentification";
}

  }
  
  state = {
    categories: [],
    filex:[],
  
}


  saveFileWordSelected (e)  {
  
    console.log(e.target.files[0]);

    this.state.filex.push(e.target.files[0])
    console.log("********");
    console.log(this.state.filex);

   /* this.setState({
      filex: e.target.files[0]
    }
    )*/

   
  };


  saveFilePdfSelected (e)  {
  
    console.log(e.target.files[0]);

    this.state.filex.push(e.target.files[0])

    console.log("********");
    console.log(this.state.filex);
   /* this.setState({
      filex: e.target.files[0]
    }
    )*/

   
  };


   importFile=  (e) => {
    const formData = new FormData();
    
    
    for (let i = 0 ; i < this.state.filex.length ; i++) {
        formData.append("files", this.state.filex[i]);
    }


    try {
      const res =  axios.post("https://localhost:7103/Template/AddTemplate", formData).then(res => { 
     
        console.log(res.data);
        window.location.href = "/AllTemplate";
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
        <div class="wrapper fadeInDown">
  <div id="formContent">

    <div class="fadeIn first">
      
    </div>

    <form>
        <label>Fichier Word</label>
         <input type="file" onChange={this.saveFileWordSelected} />
         <br/>

         <label>Fichier Pdf</label>
         <input type="file" onChange={this.saveFilePdfSelected} />
         <br/>



        <select>
      { this.state.categories.map(categorie => <option>{categorie.libelle}</option>)}
    </select>
    <br/>
    <input type="button" value="upload" onClick={this.importFile} />

    </form>

   

</div>
</div>
</div>
      
    )
  }
}