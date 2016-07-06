import React from 'react';
import {render} from 'react-dom';


export default class Event extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let offset = this.props.offset;
        // let title = this.props.title;
        // let descr = this.props.description;
        // let link = this.props.link;
        let style = {
            // width: 48,
            // height: 40,
            // position: 'relative',
            // left: 100,
            backgroundColor: 'red'
        };
        return (
        <div className="nv-calendar-events-row--event">
            <a className="nv-calendar-events-row--event-header" href="#!" style={{display: 'block'}}>
            </a>
        </div>
        );
    }
}