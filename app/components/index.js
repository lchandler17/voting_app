// IMPORT REACT
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { MemoryRouter as Router, withRouter } from 'react-router-dom'

// INCLUDE SUBCOMPONENTS
import Main from './main';
import Navbar from './nav';
import About from './about';

// HELPER FUNCTIONS
// import Helpers from './util/helpers.js';

// CREATE INDEX COMPONENT
export default class Index extends Component{
  constructor(props){
    super(props);
    this.state = { user: '', loggedIn: false };
  }
  // Will run right before mounting component
  // componentWillMount(){
  //   // get user data in session and save in state
  //   axios.get('/user').then((response) => {
  //     console.log(response.data.user);
  //     let user = response.data.user;
  //     if(user){
  //       this.setState({user: user, loggedIn: true})
  //     }
  //     else{
  //       this.setState({ user: '', loggedIn: false });
  //     }
  //   })
  // }

  // RENDER
  render() {
    return (

      <div className="">
      <Router>
        <div>

          <Navbar user={this.state.user} loggedIn={this.state.loggedIn} />

          <Switch>
              <Route exact path='/' component={Main} />
              <Route path='/about' component={About} /> 
          </Switch>

        </div>

      </Router>
      </div>

    );
  }
}

// EXPORT COMPONENT
module.exports = Index;
