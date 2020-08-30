import React from 'react';
import users from '../userInfo/users.json'

let axios = require('axios');
let numberOfUsers;
let usernames = []
axios.get('http://localhost:3000/users')
    .then(resp => {
        let data = resp.data;
        numberOfUsers = data.length;
        data.forEach(e => {
          usernames.push(`${e.username}`);
        });
    })
    .catch(error => {
        console.log(error);
    });    

class Login extends React.Component {
  login (e) {
    e.preventDefault()
    let username = document.getElementById('loginU').value
    let password = document.getElementById('loginP').value
    if(username.indexOf(usernames) > -1){
      if(password === users.users[username.indexOf(usernames)]['password']){
        this.props.history.push('/');
      }
      else{
        this.props.history.push('/login');
      }
    }
    else{
      this.props.history.push('/login');
    }
  }

  signup (e) {
    e.preventDefault()
    let username = document.getElementById('signupU').value
    let password = document.getElementById('signupP').value
    if(username.indexOf(usernames) === -1){
      const axios = require('axios');
      axios.post(`http://localhost:3000/users`,{
        "id": numberOfUsers,
        "username": username,
        "password": password,
    }).catch(error => {
        console.log(error);
    });   
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div>
        <h2>Login:</h2>
        <br />
        <form onSubmit={this.login.bind(this)}>
          <input id="loginU" type="text" placeholder="Username" />
          <input id="loginP" type="text" placeholder="Password" />
          <input type="submit" value="Login"/>
        </form>
        <br />
        <h3>Or sign up for free:</h3>
        <br />
        <form onSubmit={this.signup.bind(this)}>
          <input id="signupU" type="text" placeholder="Username" />
          <input id="signupP" type="text" placeholder="Password" />
          <input type="submit" value="Sign Up"/>
        </form>
      </div>
    );
  }
}

export default Login;