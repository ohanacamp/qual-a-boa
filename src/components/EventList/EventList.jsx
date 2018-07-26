import React from 'react';
import axios from 'axios';

export default class EventList extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/events`,{
            params: {
                lat: '-26.32',
                lon: '-48.84'
            }
        })
            .then(res => {
                const listEvents = res.data;
                this.setState({ events: listEvents.events });
            })
    }

    render() {
        return (
            <div className="eventListCard">
                <ul>
                    {this.state.events.map((event, index) =>
                        <li key={index}><a href={event.link}>{event.name}</a></li>
                         )}
                </ul>
            </div>
        )
    }
}

