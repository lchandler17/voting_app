import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'; 


class Navbar extends Component{
  constructor(props){
    super(props);
    
    this.state = { user: '' };
  }
  
   render(){
    // IF there is a user logged in, return user navbar
    // if(this.props.user){
      return(
        <div className="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light navbar-inverse">
            <h2 className="navbar-brand brand-name">
               <a href="/">Votem Project</a>
            </h2>
            <button className="navbar-toggler navbar-toggle" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavLink to={'/'} exact className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/about'} exact className="nav-link">About Us</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={'/election'} exact className="nav-link">New Election</NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Vote
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Ice Cream</a>
                    <a className="dropdown-item" href="#">Cookies</a>
                    <a className="dropdown-item" href="#">Pie</a>
                  </div>
                </li>
                <li className="nav-item">
                  <NavLink to={''} className="nav-link">Results</NavLink>
                </li>
              </ul>
              
              <ul className="nav navbar-nav navbar-right">
                <li className="nav-item">
                  <span>Welcome {this.props.user.Name}</span>
                </li>
                <li className="nav-item">
                  <a className="btn btn-primary" href="/logout">Log Out</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>          
    //   )
    // }
    
    // Default navbar (no user logged in)
    //see extra
    )
  }
}

export default Navbar;