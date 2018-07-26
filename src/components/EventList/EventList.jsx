import React from 'react';
import Event from "../Event/Event.jsx";

export default class EventList extends React.Component {
    render() {
        let events = this.props.events;

        return (
            <div className="eventListCard">
                <ul> 
                    {events.map((event, index) =>
                        <Event 
                            key={index}
                            link={event.link}
                            name={event.name}
                            date={event.local_date}
                            time={event.local_time}
                            place={event.venue ? event.venue.name : 'Em breve!'}
                            address={event.venue ? event.venue.address_1 : 'Em breve!'}
                            description ={event.description}
                            attendance={event.attendance_count}
                            avatar={event.featured_photo}
                        />
                    )}
                </ul>
            </div>
        )
    }
}