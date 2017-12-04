// IMPORT DEPENDENCIES
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Link, NavLink } from 'react-router-dom'; 

import helpers from './util/helpers';

class Vote extends Component{

	constructor(props) {
		super(props);
		this.state = {
			electionid: '',
			electiontitle: '',
			position1: '',
			position1candidate1: '',
			position1candidate2: '',
			position1candidate3: '',
			position2: '',
			position2candidate1: '',
			position2candidate2: '',
			position2candidate3: '',
			position3: '',
			position3candidate1: '',
			position3candidate2: '',
			position3candidate3: '',
			selectedOption1: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	loadElection(){
		// helpers.getElection()
		// 	.then((response) => {
		// 		//MAP IN DATA TO RENDER ON PAGE
		// 		let candidates = response.data.Candidate;  
		// 	    if(candidates){
		// 	        let canlist = candidates.map((name) => {

		// 			return(
		// 				<div className="radio">
		// 				    <label>
		// 				        <input type="radio" value={name} onChange={this.handleOptionChange} checked={this.state.selectedOption === this.state.value} />
		// 				        {name}
		// 				    </label>
		// 				</div>
		// 			)
		//         });
		// 	});

		//FOR PURPOSE OF THIS EXAMPLE, SET STATE MANUALLY
		this.setState({
			electiontitle: "Ice Cream",
			position1: 'Most Awesome',
			position1candidate1: 'Butter Pecan',
			position1candidate2: 'Sea Salt Caramel',
			position1candidate3: 'Chocolate Cayenne',
			position2: 'Most Awful',
			position2candidate1: 'Superman',
			position2candidate2: 'Peppermint',
			position2candidate3: 'Bubblegum',
			position3: 'Favorite Kind',
			position3candidate1: 'FroYo',
			position3candidate2: 'Gelato',
			position3candidate3: 'Sorbet',
			selectedOption1: ''
		});

		console.log("loaded!");
	}

	handleOptionChange(event){
		//REF:
		//http://react.tips/radio-buttons-in-reactjs/
		//https://stackoverflow.com/questions/35451287/react-cant-uncheck-radio-button
		//https://github.com/facebook/react/issues/1471

		event.preventDefault();

		this.setState({
		    selectedOption: event.target.value
		});
	}

	handleSubmit(event){
		//POST TO DATABASE

		event.preventDefault();
	}

	componentWillMount(){
		this.loadElection();
	}

	render(){
		
		return(
			<div className="">

				<h3>Now Voting for:</h3>
				<h1>{this.state.electiontitle}</h1>
				<hr />

				<form action="/voted" method="post" onSubmit={this.handleSubmit}>
					<div className="position">
						<h4>{this.state.position1}:</h4>
						<div className="radio">
					      <label>
					        <input type="radio" value={this.state.position1candidate1} onChange={this.handleOptionChange} checked={this.state.selectedOption === 'option1'} />
					        {this.state.position1candidate1}
					      </label>
					    </div>
					    <div className="radio">
					      <label>
					        <input type="radio" value={this.state.position1candidate2} onChange={this.handleOptionChange} checked={this.state.selectedOption === 'option2'} />
					        {this.state.position1candidate2}
					      </label>
					    </div>
					    <div className="radio">
					      <label>
					        <input type="radio" value={this.state.position1candidate3} onChange={this.handleOptionChange} checked={this.state.selectedOption === 'option3'} />
					        {this.state.position1candidate3}
					      </label>
					    </div>
					</div>

					<div className="position">
						<h4>{this.state.position2}:</h4>
						<div className="radio">
					      <label>
					        <input type="radio" value={this.state.position2candidate1} onChange={this.handleOptionChange} checked={this.state.selectedOption2 === 'option1'} />
					        {this.state.position2candidate1}
					      </label>
					    </div>
					    <div className="radio">
					      <label>
					        <input type="radio" value={this.state.position2candidate2} onChange={this.handleOptionChange} checked={this.state.selectedOption2 === 'option2'} />
					        {this.state.position2candidate2}
					      </label>
					    </div>
					    <div className="radio">
					      <label>
					        <input type="radio" value={this.state.position2candidate3} onChange={this.handleOptionChange} checked={this.state.selectedOption2 === 'option3'} />
					        {this.state.position2candidate3}
					      </label>
					    </div>
					</div>

					<div className="position">
						<h4>{this.state.position3}:</h4>
						<div className="radio">
					      <label>
					        <input type="radio" value={this.state.position3candidate1} onChange={this.handleOptionChange} checked={this.state.selectedOption3 === 'option1'} />
					        {this.state.position3candidate1}
					      </label>
					    </div>
					    <div className="radio">
					      <label>
					        <input type="radio" value={this.state.position3candidate2} onChange={this.handleOptionChange} checked={this.state.selectedOption3 === 'option2'} />
					        {this.state.position3candidate2}
					      </label>
					    </div>
					    <div className="radio">
					      <label>
					        <input type="radio" value={this.state.position3candidate3} onChange={this.handleOptionChange} checked={this.state.selectedOption3 === 'option3'} />
					        {this.state.position3candidate3}
					      </label>
					    </div>
					</div>

					<div>
			        	<input className="button subbutton" type="submit" value="Submit Votes" onClick={this.handleSubmit}/>
			    	</div>
				</form>

			</div>
		)
	}

}

// EXPORT COMPONENT
export default Vote;