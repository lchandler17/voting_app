// IMPORT DEPENDENCIES
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link, NavLink } from 'react-router-dom'; 
// let Promises = require('bluebird');

class Vote extends Component{

	constructor(props) {
		super(props);
		this.state = {
			electionid: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event){
		//send votes to database
	}

	render(){
		return(
			<div className="">

				<p>Hey, Hey Ya...</p>

			</div>
		)
	}

}

// EXPORT COMPONENT
export default Vote;