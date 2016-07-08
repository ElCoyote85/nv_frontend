import React from 'react';
import {render} from 'react-dom';
import Event from './Event';

export default class Row extends React.Component {
    constructor(props) {
        super(props);

        this.events = this.props.row.map(function (event, index) {
            return <Event event={event} firstDate={this.props.firstDate} key={index}/>
        }, this);
    }


    componentWillReceiveProps() {

    }

    componentWillMount(){

    }

    render() {
        let style = {
            height: '40px',
        };
        let events = this.events;
        return (
            <div className="nv-calendar-events-row" style={style}>
                {events}
            </div>
        );
    }
}