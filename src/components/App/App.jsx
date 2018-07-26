import React, { Component } from 'react';

import './App.css';
import EventList from '../EventList/EventList';

class App extends Component {
	
	render() {
		return (
			<div className="App">
				<header className="App-header">
					HelloWorld
				</header>
				<EventList>
					{this.state}
				</EventList>
		  </div>
		);
	}
}

export default App;
