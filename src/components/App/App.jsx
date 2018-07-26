import React, { Component } from 'react';
import axios from 'axios';

import EventList from '../EventList/EventList';

import './App.css';

class App extends Component {
	state = {
		events: [],
		categories: []
    }

    componentDidMount() {
        axios.get('/events', {
            params: {
                lat: '-26.31999969482422',
                lon: '-48.84000015258789',
                fields: 'featured_photo'
            }
        }).then(res => {
            const listEvents = res.data;
            this.setState({ events: listEvents.events });
        })
	}
	
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
