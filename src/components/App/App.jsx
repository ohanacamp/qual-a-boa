import React, { Component } from 'react';

import './App.css';
import EventList from '../EventList/EventList';

class App extends Component {
	
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<div className="App-header__logo">
						<img className="logo"src="https://d30y9cdsu7xlg0.cloudfront.net/png/15343-200.png" alt="Qual a Boa Joinville?"/>
					</div>
				
					<div className="App-header__title">
						<h1>Qual a boa Joinville?</h1>
					</div>
				</header>
				<EventList >
					{this.state}
				</EventList>
		  </div>
		);
	}
}

export default App;
