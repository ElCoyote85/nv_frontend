import React from 'react';
import {render} from 'react-dom';
import {Motion, spring, presets} from 'react-motion';

import EventCalendar from  'react-event-calendar';




export default class Calendar extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.openCalendar();
    }

    componentWillUpdate() {
        console.log('dekdjekdje');
    }

    componentWillReceiveProps  () {
        // this.closeCalendar();

    }

    closeCalendar() {
        this.setState(
            {
                style: {
                    start: {
                        left: 0,
                        width: 100
                    },
                    stop: {
                        left: -100,
                        width: 30
                    }
                }
            }
        );
    }

    openCalendar() {
        this.state = {
            style: {
                start: {
                    left: -100,
                    width: 30
                },
                stop: {
                    left: 0,
                    width: 100
                }
            }
        };
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

        this.props.calIsOpen ? this.closeCalendar() : this.openCalendar();
        console.log('Update');

        return (
            <Motion
                defaultStyle={this.state.style.start}
                style={{
                    left: spring(this.state.style.stop.left, {stiffness: 100, damping: 10}),
                    width: spring(this.state.style.stop.width, {stiffness: 100, damping: 10}),
                 }}>

                {
                    val => {
                        let newStyle = {
                            display: 'block',
                            left: `${val.left}%`,
                        };
                        return (<div className="nv-calendar-events" style={newStyle}>

                        </div>)
                    }
                }
            </Motion>
        );
    }
}
