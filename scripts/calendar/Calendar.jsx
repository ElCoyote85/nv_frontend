import React from 'react';
import {render} from 'react-dom';
import {Motion, spring, presets} from 'react-motion';

import moment from 'moment';
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
        stop: '2016-07-18',
        title: 'Third expo and some long expo description'
    },
    {
        start: '2016-07-07',
        stop: '2016-07-11',
        title: 'Четвертая выставка'
    },
    {
        start: '2016-07-06',
        stop: '2016-07-12',
        title: 'Fifth '
    },
    {
        start: '2016-07-15',
        stop: '2016-07-19',
        title: 'Шестая выставка '
    },

]

export default class Calendar extends React.Component {


    constructor(props) {
        super(props);
        // this.setState({isOpen: false});
        // this.state.isOpen = false;
        this.stepLength = 48;
        // this.rowHeight = 40;
        this.rows = [];
    }

    componentDidMount() {
        this.setState({isOpen: false});
    }

    makeMatrix() {
        let rows = [];

        expos.forEach(function (eventValue) {
            insertToRow(0, eventValue);
        });

        return rows;

        function insertToRow(rowNumber, eventValue) {
            var nextRow = false;

            if(rows[rowNumber] === undefined) {
                rows[rowNumber] = [];
                rows[rowNumber].push(eventValue);
            } else {
                for(let i=0; i <= rows[rowNumber].length - 1; i++ ) {
                    rowHasEvent(rows[rowNumber][i], eventValue) ? nextRow = true : nextRow = false;
                    if(nextRow) break;
                }
                // rows[rowNumber].forEach(function (rowEventValue) {
                //     rowHasEvent(rowEventValue, eventValue) ? nextRow = true : nextRow = false;
                // });
                nextRow ? insertToRow(rowNumber + 1, eventValue) : rows[rowNumber].push(eventValue);
            }
        }

        function rowHasEvent(rowsEvent, eventsEvent) {
            // debugger;
            if(moment(eventsEvent.start).isBetween(rowsEvent.start, rowsEvent.stop, null, '[]') ||
                moment(eventsEvent.stop).isBetween(rowsEvent.start, rowsEvent.stop, null, '[]') ||
                moment(rowsEvent.stop).isBetween(eventsEvent.start, eventsEvent.stop, null, '[]') ||
                moment(rowsEvent.start).isBetween(eventsEvent.start, eventsEvent.stop, null, '[]')
            ) {
                return true;
            } else {
                return false;
            }
        }
    }


    componentWillMount() {
        this.rows = this.makeMatrix();
        console.log(this.rows);
    }

    componentWillReceiveProps() {
        this.props.isOpen ? this.closeCalendar() : this.openCalendar();
        // console.log('Update');
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
        let columnsNumber = moment(expos[expos.length - 1].stop).diff(expos[0].start, 'days');
        console.log(columnsNumber) ;
        var rows = this.rows.map(function (rowItem, index) {
           return <Row row={rowItem} firstDate={this.rows[0][0].start} key={index}  />
        }, this);

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
                                {rows}
                            </div>
                        )
                    }
                }
            </Motion>
        );
    }
}
