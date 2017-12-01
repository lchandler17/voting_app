// IMPORT DEPENDENCIES
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
let Promises = require('bluebird');

class Election extends Component{

	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});

		// const target = event.target;
		const name = event.target.name;
		const type = event.target.type;

		this.setState({
	      [name]: this.state.name,
	      [type]: this.state.value
	    });

	    console.log(this.state.value);
	    // console.log(this.state.type);
	    // console.log(this.type);

	    // this.popEntry();
	}

	handleSubmit(event) {
		// alert('A name was submitted: ' + this.state.value);



		event.preventDefault();
	}

	popEntry(event){
		this.handleChange(event);

		if(this.state.value === "select1"){
			console.log("SELECT1 WORKS!");
		}
	}

	render(){
	  return(
	    <div className="">
	    	<p>To create a new election, input the following information:</p>
	    	<form action="/newelection" method="post" onSubmit={this.handleSubmit}>
			    <div>
			        <label>Election Title:</label>
			        <input type="text" name="username" value={this.state.name} onChange={this.handleChange} />
			    </div>
			    <div>
			        <label>Election Type:			    		
				        <select value={this.state.value} onChange={this.handleChange}>
				        		<option value="none">--</option>
				    			<option value="select1">Select One</option>
				    			<option value="select2">Select Multiple</option>
				    			<option value="ranked">Rank Choices</option>
				    	</select>
			        </label>
			    </div>
			    <div>
			        <input type="submit" value="Submit"/>
			    </div>
			</form>

	    </div>
	  )
	}
}

// EXPORT COMPONENT
export default Election;