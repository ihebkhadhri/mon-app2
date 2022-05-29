import React from 'react';

import axios from 'axios';

export default class Categorie extends React.Component {
  
  constructor(props) {
    super(props);
    this.saveFileSelected = this.saveFileSelected.bind(this);
    this.importFile = this.importFile.bind(this);
    
    if(sessionStorage.getItem("Token")==null)
{
  window.location.href="/Authentification";
}

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
        window.location.href = "/Templates/"+res.data;
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
         <input type="file" onChange={this.saveFileSelected} />
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