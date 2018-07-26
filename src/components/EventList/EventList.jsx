import React from 'react';
import axios from 'axios';
import Event from "../Event/Event.jsx";
import './EventList.css';

export default class EventList extends React.Component {
    state = {
        events: []
    }

    componentDidMount() {
        axios.get('/events', {
                params: {
                    lat: '-26.31999969482422',
                    lon: '-48.84000015258789',
                    fields: 'featured_photo',
                    radius: 10

                }
            })
            .then(res => {
                const listEvents = res.data;
                listEvents.events.description = this.toHtml(listEvents.events.description);
                this.setState({ events: listEvents.events });
            })
    }
    toHtml(d) {
        let parser = new DOMParser()
        let el = parser.parseFromString(d, "text/xml");
        return el;
    }

    render() {
        
        return (
        <div className = "eventListCard">
            
            {this.state.events.map((event, index) =>
                <Event 
                    key={index}
                    link={event.link}
                    name={event.name}
                    date={event.local_date}
                    time={event.local_time}
                    //place={event.venue.name}
                    //address={event.venue.address_1}
                    description ={event.description}
                    attendance={event.attendance_count}
                    avatar={event.featured_photo}
                    
                />
            )}
        </div>
        )
    }
}   