import axios from 'axios';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { render } from '@testing-library/react';

export default class Authentification extends React.Component {


    constructor(props) {
        super(props);
    
        sessionStorage.clear();
        this.onChangeUsername = this.onChangeUsername.bind(this);
        
        this.onChangePassword = this.onChangePassword.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);
    }


state = {
    docs: [],
    username: "" ,
    password:"" ,
    ourtoken:Object
}

onChangeUsername(e){
    this.setState({
        username:e.target.value
    })

}

onChangePassword(e){
    this.setState({
        password:e.target.value
    })
}

onSubmit(e) {
    
    axios.get('https://localhost:7103/Token/GetUser/'+this.state.username+'/'+this.state.password)
      .then(res => {
          console.log(res.data); 
        this.setState({ourtoken:res.data})
        sessionStorage.setItem("Token", res.data);
        
      })
  }


  render() {
      return(
        <form >
        <input required type="text" id="login" className="fadeIn second" name="login" placeholder="login" value={this.state.username}
        onChange={this.onChangeUsername} />

        <p id="errorusername" style={{color: "red"}}> username invalide </p>


        <input required type="text" value={this.state.password}
        onChange={this.onChangePassword} id="password" className="fadeIn third" name="login" placeholder="password" />
        
        <p id="errorpassword" style={{color: "red"}}> password invalide </p>
       
        <input type="button" onClick={this.onSubmit} className="fadeIn fourth" value="Log In" />
      </form>
  
      );
  }

}