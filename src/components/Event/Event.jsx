import React from 'react';

export default class Event extends React.Component {
  render() {
    let props = this.props;

    return (
      <div className="event">
        <li key={props.key}> 
          <img alt={props.name} src={props.avatar ? props.avatar.thumb_link : 'https://www.zndrke.com/dashboard/img/placeholder.png'} />
          <a href={props.link}> {props.name} | {props.date} | {props.place} | {props.address} | {props.time} | {props.attendance_count} | {props.description}</a>
        </li>
      </div>
    )
  }
}