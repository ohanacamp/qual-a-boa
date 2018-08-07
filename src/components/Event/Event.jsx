import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import './Event.css';
export default class Event extends React.Component {
  render() {
    let props = this.props;

    return (

      <div className="event" key={props.key}>
        <div className="event__header">
          <span className="event__date">
            <p>{props.date} </p>
          </span>
          <img href={props.link} className="event__avatar" alt={props.name} src={props.avatar ? props.avatar.photo_link : 'https://www.zndrke.com/dashboard/img/placeholder.png'} />
        </div>
        <div className="event__info" >
          <span className="event__place">
            <p>{props.place} | {props.address} </p>
          </span>
          <span className="event__name">
            <h2><a href={props.link} target="_blank">{props.name}</a></h2>
          </span>
          <span className="event__time">
            <p>{props.time}</p>
          </span>
        </div>
        <div className="event__description">
          <p> {ReactHtmlParser(props.description)}</p>
        </div>
      </div>
    )
  }
}