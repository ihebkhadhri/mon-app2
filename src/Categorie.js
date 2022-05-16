import React from 'react';

import axios from 'axios';

export default class Categorie extends React.Component {
  state = {
    categorie: []
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
      <ul>
        { this.state.persons.map(categorie => <li>{categorie.libelle}</li>)}
      </ul>
    )
  }
}