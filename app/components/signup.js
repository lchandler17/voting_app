// IMPORT REACT
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'; 

class Signup extends Component{

	constructor(props) {
		super(props);
		this.state = {value: ''};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});

		const target = event.target;
		const name = target.name;

		this.setState({
	      [name]: value
	    });

	    console.log(this.state.name);
	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
	}

	render(){
	  return(
	    <div className="">

	    	<form action="/createuser" method="post" onSubmit={this.handleSubmit}>
			    <div>
			        <label>New Username:</label>
			        <input type="text" name="username" value={this.state.name} onChange={this.handleChange} />
			    </div>
			    <div>
			        <label>Choose Password:</label>
			        <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
			    </div>
			    <div>
			        <label>Confirm Password:</label>
			        <input type="password" name="password2" onChange={this.handleChange} />
			    </div>
			    <div>
			        <label>Will you be an election administrator or a voter?			    		
				        <select value={this.state.usertype} onChange={this.handleChange}>
				    			<option value="admin">Election Admin</option>
				    			<option value="voter">Voter</option>
				    	</select>
			        </label>
			    </div>
			    <div>
			        <input type="submit" value="Register"/>
			    </div>
			</form>

	    </div>
	  )
	}
}

// EXPORT COMPONENT
export default Signup;