import React from 'react';
import {render} from 'react-dom';
import Event from './Event';

export default class Row extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let style = {
            height: 40,
        };
        return (
            <div className="nv-calendar-events-row" style={style}>
                <Event/>
            </div>
        );
    }
}