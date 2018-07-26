import React, { Component } from 'react';
import axios from 'axios';

import EventList from '../EventList/EventList.jsx';
import FilterCategories from '../FilterList/FilterCategories.jsx';

import './App.css';

class App extends Component {
	state = {
		events: [],
		categories: [],
		filter: null
	}
	
	filter(id) {
		this.setState({filter: id})
		const lat = '-26.31999969482422', lon = '-48.84000015258789';
		axios.get('/events', {
            params: {
                lat: lat,
                lon: lon,
				fields: 'featured_photo',
				topic_category: this.state.filter
            }
        }).then(res => {
            let listEvents = res.data;
            this.setState({ events: listEvents.events });
		})
	}

    componentDidMount() {
		const lat = '-26.31999969482422', lon = '-48.84000015258789';

        axios.get('/events', {
            params: {
                lat: lat,
                lon: lon,
				fields: 'featured_photo',
				topic_category: this.state.filter
            }
        }).then(res => {
            let listEvents = res.data;
            this.setState({ events: listEvents.events });
		})
		
		axios.get('/events/categories', {
            params: {
                lat: lat,
                lon: lon
            }
        }).then(res => {
            let listCategories = res.data;
            this.setState({ categories: listCategories });
        })
	}
	
	render() {
		return (
			<div className="App">
				<header className="App-header">
					HelloWorld
				</header>
				<FilterCategories 
					categories={this.state.categories} 
					onFilter={this.filter.bind(this)}
				/>
				<EventList events={this.state.events} />
		  	</div>
		);
	}
}

export default App;
