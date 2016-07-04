import React from 'react';
import {render} from 'react-dom';
import {Spring, presets} from 'react-motion';

import EventCalendar from  'react-event-calendar';



class Mycomp extends React.Component {
    render() {
        return (
            <h3>{this.props.text}</h3>
        );
    }
}


export default class Calendar extends React.Component {

    constructor(props) {
        super(props);
    }



    render() {
        // var stepLength = this.props.stepLength;
        // const events = [
        //     {
        //         start: '2016-06-20',
        //         end: '2016-06-02',
        //         eventClasses: 'optionalEvent',
        //         title: 'test event',
        //         description: 'This is a test description of an event',
        //     },
        //     {
        //         start: '2016-06-15',
        //         end: '2016-06-25',
        //         title: 'test event',
        //         description: 'This is a test description of an event',
        //         data: 'you can add what ever random data you may want to use later',
        //     },
        // ];
        return (
            <div></div>
                

        );
    }
}
