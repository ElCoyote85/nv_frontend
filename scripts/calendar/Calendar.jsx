import React from 'react';
import {render} from 'react-dom';
import {Motion, spring, presets} from 'react-motion';

import * as moment from 'moment';
import 'moment/locale/ru';

// import EventCalendar from  'react-event-calendar';

import Row from './Row';

const expos = [
    {
        start: '2016-07-06',
        stop: '2016-07-10',
        title: 'First expo Some long expo description'
    },
    {
        start: '2016-07-08',
        stop: '2016-07-15',
        title: 'Second expo and some long expo description'
    },
    {
        start: '2016-07-16',
        stop: '2016-07-06',
        title: 'Third expo and some long expo description'
    },

]

export default class Calendar extends React.Component {


    constructor(props) {
        super(props);
        // this.setState({isOpen: false});
        // this.state.isOpen = false;
        this.stepLength = 48;
        // this.rowHeight = 40;
    }

    componentDidMount() {
        this.setState({isOpen: false});
    }

    makeMatrix() {
        let rows = [];

        insertIntoRow = function (event, expoIndex) {
            rows.forEach(function (row, rowIndex) {
                var currentRowIndex = 0;
                row.forEach(function (rowEvent, eventIndex) {
                    if(!moment(event.start).isBetween(rowEvent.start, rowEvent.stop)) {
                        rows[currentRowIndex].push(expos.splice(expoIndex, 1)[0]);
                    } else {
                        currentRowIndex++;
                        insertIntoRow(event, expoIndex);
                    }
                });
            })
        }

        expos.forEach(function (event, i, arr) {
            if(rows[0] === undefined) {
                rows[0] = [];
                rows[0].push(expos.splice(i, 1)[0]);
            } else {
                insertIntoRow(event, i);
            }
        })

    }

    rowHasSlot(rowEvents = [], event) {
        // rowEvents
    }

    componentWillMount() {
    }

    componentWillReceiveProps() {
        this.props.isOpen ? this.closeCalendar() : this.openCalendar();
        console.log('Update');
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
                },
                isOpen: true
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
            },
            isOpen: false
        };
    }


    render() {
        // var stepLength = this.props.stepLength;
        var stepLength = 48;
        const events = [
            {
                start: '2016-07-20',
                end: '2016-07-02',
                eventClasses: 'optionalEvent',
                title: 'test event',
                description: 'This is a test description of an event',
            },
            {
                start: '2016-06-15',
                end: '2016-06-25',
                title: 'test event',
                description: 'This is a test description of an event',
                data: 'you can add what ever random data you may want to use later',
            },
        ];


        // this.props.calIsOpen ? this.closeCalendar() : this.openCalendar();
        if(!this.props.calendarIsMounted) return(<div></div>);

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
                            // opacity: 0.5
                            backgroundColor: 'white'
                        };
                        return (
                            <div className="nv-calendar-events" style={newStyle}>
                                <Row/>
                                <Row/>
                                <Row/>
                                <Row/>
                            </div>
                        )
                    }
                }
            </Motion>
        );
    }
}
