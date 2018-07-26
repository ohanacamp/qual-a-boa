import React from 'react';
import axios from 'axios';

export default class EventList extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        axios.get(`http://http://pokeapi.co/api/v2/pokemon/butterfree`)
            .then(res => {
                const events = res.data;
                this.setState({ events });
            })
    }

    render() {
        return (
            <div className="eventListCard">
                <ul>
                    {this.state.events.map(event => <li>{event.name}</li>)}
                </ul>
            </div>
        )
    }
}