import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';


class App extends Component {
	constructor() { // if we want to declare the state we need to use constructor
		super()
		this.state = { // state is something that can change and affect our app (affect our webpage when using it ! like in this example ! using it with the searchbox it affects our CardList)
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		 .then(response=> response.json()) // we are getting the name and username from another site ! connecting to another server we get the infos from there using fetch
		 .then(users=> {this.setState({ robots: users})});
	}

	onSearchChange = (event) => { // when we are typing in the search engine we want our app to react to import
		this.setState({ searchfield: event.target.value }) // anytime you wanna change state to another parameter
 // if the name of the robots in lowercase includes then only return the robots that returns true
		// remember with an event you always have event.target.value which should give us the value of what we're searching
	}

// we use this.onSearchChange because it's an object that we re working in so 'this' is required
	render() {
				const filteredRobots = this.state.robots.filter(robot =>{ // by using this.state.robots we can access to the robots from the cardlist not from the robots file
				return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());// if the name of the robots in lowercase includes then only return the robots that returns true
			})

		if(this.state.robots.length ===0) {
			return <h1>Loading</h1>
		} else {
			return (
		<div className='tc'>
			<h1 className='f1'>robofriends</h1>
		<SearchBox searchChange={this.onSearchChange} /> 
			<Scroll> 
				<CardList robots={filteredRobots} />  // 
			</Scroll>
		</div>
		);
		}
		// we want to be scrolling our searchbox when we go down, so we re putting scroll around our CardList to wrap the cardlist
		// now CardList can be scrollable
		// so we're telling Scroll to render whatever's inside it how ? ! go to Scroll.js
		// scroll can use 'children' as a way to render its children (what's inside it)
	}
}

export default App;


//we have our App Component that has 2 states : robots and searchfield 
//and because App owns the state, any Component that has 'state' uses
//the class syntax so they can use the 'constructor' function to create
//'this.state', and this 'state is what changes in an app, it's what
//describes the app.