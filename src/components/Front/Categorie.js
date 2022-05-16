import React from 'react';

import axios from 'axios';

export default class Categorie extends React.Component {
  state = {
    categories: []
  }

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
        <select>
      { this.state.categories.map(categorie => <option>{categorie.libelle}</option>)}
    </select></div>
      
    )
  }
}