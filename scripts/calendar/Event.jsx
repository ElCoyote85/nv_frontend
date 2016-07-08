import React from 'react';
import {render} from 'react-dom';

import moment from 'moment';


export default class Event extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUpdate() {

    }

    componentWillMount(){
        this.event = this.props.event;
    }

    render() {
        // let offset = this.props.offset;
        // let title = this.props.title;
        // let descr = this.props.description;
        // let link = this.props.link;
        if(this.props.firstDate !== undefined) {
            var firstDate = this.props.firstDate;
            this.offset = this.length = 0;
            this.offset = moment(this.event.start).diff(firstDate, 'days');
            this.length = moment(this.event.stop).diff(this.event.start, 'days');
        }

        let event = this.event;
        let style = {
            width: `${this.length * 48}px`,
            // height: 40,
            height: `${100}%`,
            position: 'relative',
            left: `${this.offset * 48}px`,
            right: 0
            // backgroundColor: 'red'

        };
        return (
        <div className="nv-calendar-events-row--event" style={style}>
            <a className="nv-calendar-events-row--event-header" href="#!" style={{display: 'block'}}>
                {event.title}
            </a>
        </div>
        );
    }
}