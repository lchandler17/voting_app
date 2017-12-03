// IMPORT DEPENDENCIES
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link, NavLink } from 'react-router-dom'; 
// let Promises = require('bluebird');

class Election extends Component{

	constructor(props) {
		super(props);
		this.state = {
			value: '',
			name: '',
			title: '',
			type: '',
			candidate: '',
			position: ''
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleTypeChange = this.handleTypeChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleTitleChange(event) {
		this.setState({
	      title: event.target.value
	    });
	}

	handleTypeChange(event) {
		this.setState({
	      type: event.target.value
	    });
	}

	handleChange(event) {
		this.setState({value: event.target.value});

		const title = event.target.title.value;
		const type = event.target.type.value;

		this.setState({
	      title: title,
	      type: type
	    });
	}

	handle(event){
		this.setState({
	      candidate: event.target.value
	    });
	}

	handleSubmit(event) {
		event.preventDefault();
	
		console.log(event.target);
		console.log(this.state.title, this.state.type);
	}

	newCan(){
		const newCanTest = (	
			<div>
				<div>
			    	<label>Candidate:</label>
			    	<input className="candidate" type="text" name="candidatenew" />
			    </div>

			    <div id="newCan" />
			</div>
		)

		ReactDOM.render(newCanTest, document.getElementById('newCan'));
		// $("#newCan").append(newCanTest);
	}

	componentDidMount(){
		const newPosTest = (
			<div>
				<div className="position">
			    	<label>Position:</label>
			    	<input type="text" name="position1"  onChange={this.handleChange} />
			    </div>
			    <div className="candidate" >
			    	<label>Candidate:</label>
			    	<input type="text" name="candidate1"  onChange={this.handleChange} />
			    </div>
			    <div className="candidate" >
			    	<label>Candidate:</label>
			    	<input type="text" name="candidate2" onChange={this.handleChange} />
			    </div>
			    <div className="candidate" >
			    	<label>Candidate:</label>
			    	<input type="text" name="candidate3"  onChange={this.handleChange} />
			    </div>

			    <div id="newCan" />

			    <div>
			    	<input className="button addbutton" type="submit" value="Add another candidate" onClick={this.newCan} />
			    </div>

			    <div id="newPos" />

			    <div>
			    	<input className="button addbutton" type="submit" value="Add another position" onClick={this.newPos} />
			    </div>

			</div>
		)

		ReactDOM.render(newPosTest, document.getElementById('newPos'));
		// console.log("did mount!");
	}

	render(){
	  var etype = this.state.type;
	  console.log("Etype:" + etype);

	  var etitle = this.state.title;
	  //var etitle = $("#etitle").val();
	  console.log("etitle:" + etitle);

	  // console.log("did render!");

	  return(
	    <div className="">
	    	<p>To create a new election, input the following information:</p>
	    	<form action="/newelection" method="post" onSubmit={this.handleSubmit}>
			    <div>
			        <label>Election Title:</label>
			        <input id="etitle" type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} />
			    </div>
			    <div>
			        <label>Election Type:			    		
				        <select value={this.state.type} name="type" onChange={this.handleTypeChange}>
				        		<option value="none">--</option>
				    			<option value="select1">Select One</option>
				    			<option value="select2">Select Multiple</option>
				    			<option value="ranked">Rank Choices</option>
				    	</select>
			        </label>
			    </div>

			    <div id="newPos" />

			    <div>
			        <input className="button subbutton" type="submit" value="Submit" onClick={this.subFunc}/>
			    </div>
			</form>
	    </div>
	  )

	}
}

// EXPORT COMPONENT
export default Election;