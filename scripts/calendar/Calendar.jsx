import React from 'react';
import {render} from 'react-dom';
import {Motion, spring, presets} from 'react-motion';

import moment from 'moment';
import 'moment/locale/ru';

import Draggable from 'react-draggable'

// import EventCalendar from  'react-event-calendar';

import Row from './Row';
import expos from './_expos';

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

    makeHeaderDates() {
        let months = [],
            firstDate = expos[0].start,
            lastDate = expos[expos.length-1].stop;
        let daysCount =  moment(lastDate).diff(firstDate, 'days') + 5;
        for(let i=0; i<= daysCount; i++) {
            let iterDate = moment(firstDate).add(i, 'd');
            let monthName = moment(iterDate).format('MMMM');
            let monthNumber = +moment(iterDate).format('M');

            // (months[monthName] === undefined) ? months[monthName] = new Array() : months[monthName];
            if(months[monthNumber] === undefined) {
                months[monthNumber] = [];

            }

            months[monthNumber].push({
                day: moment(iterDate).format('DD'),
                weekDay: moment(iterDate).format('dd'),
                monthName: moment(iterDate).format('MMMM'),
            });
            // months[monthName].push({
            //     day: moment(iterDate).format('DD'),
            //     weekDay: moment(iterDate).format('dd')
            // });
        };

        return months;
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


    componentWillMount() {
        this.scrollOffset = 0;
        this.rows = this.makeMatrix();
        this.headerDates = this.makeHeaderDates();
    }

    componentWillReceiveProps() {
        this.props.isOpen ? this.closeCalendar() : this.openCalendar();
    }

    render() {
        let stepLength = this.props.stepLength;
        let columnsNumber = moment(expos[expos.length - 1].stop).diff(expos[0].start, 'days');
        let dates = this.headerDates;
        let days = [];

        let monthsBlocks = dates.map(function (val, id) {
            // debugger;
            let style = {
                width: `${48 * val.length}px`,
            };
            days = days.concat(val);
            return <div className="nv-calendar-events--month" style={style}>{val[0]['monthName']}</div>;
        });

        let daysBlocks = days.map(function (val, id) {
            let style = {
                width: `${48}px`
            };

            return <div className="nv-calendar-events--day" style={style}>
                <span className="nv-calendar-events--day-number">{val['day']}</span>
                <span className="nv-calendar-events--day-weekday">{val['weekDay']}</span>
            </div>;

        });

        var rows = this.rows.map(function (rowItem, index) {
           return <Row row={rowItem} firstDate={this.rows[0][0].start} key={index} width={(columnsNumber+4) * 48} />
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
                        let scrollStyle = {
                            // left: `${this.scrollOffset}`;
                        }
                        return (
                            <div className="nv-calendar-events" style={newStyle}>
                                <div className=".nv-calendar-events--move-left"></div>
                                <Draggable
                                    axis="x"
                                    defaultPosition={{x: 0, y: 0}}
                                    bounds={{right: 0}}
                                >
                                <div className="nv-calendar-events-scroll" style={{width: `${(columnsNumber +5) * 48}px`}}>
                                    <div className="nv-calendar-events--months">
                                        {monthsBlocks}
                                    </div>
                                    <div className="nv-calendar-events--days">
                                        {daysBlocks}
                                    </div>
                                    {rows}
                                </div>
                                </Draggable>
                                <div className=".nv-calendar-events--move-left"></div>
                            </div>
                        )
                    }
                }
            </Motion>
        );
    }
}
