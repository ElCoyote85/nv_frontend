import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import Calendar from './Calendar';

import moment from 'moment';
import 'moment/locale/ru';

// import {Motion, spring} from 'react-motion';
import {Motion, presets, spring} from 'react-motion';

export default class CalendarAside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            calendarIsMounted: false
        }
    }

    componentWillMount() {
        // this.setState({
        //     isOpen: false
        // });
        let now = moment();
        this.state.now = now;
        this.updateTime();
    }

    componentDidMount() {

    }

    updateTime() {
        let now = this.state.now,
            that = this;
        that.state.currentTime = moment().format('HH:mm');
        // setInterval(function () {
        //     that.state.currentTime = moment().format('HH:mm:ss');
        //     that.forceUpdate();
        // }, 10000);
    }

    clickHandler(e) {
        this.setState({isOpen: !this.state.isOpen, calendarIsMounted: true});
        if(this.state.isOpen) {
            this.arrow
        }
    }

    getArrow() {
        if(!this.state.isOpen) {
            return <span className="nv-calendar--info--arrow" style={{transform: "none"}}></span>;
        } else {
            return <span className="nv-calendar--info--arrow" style={{transform: "scaleX(-1)"}}></span>;
        }
    }

    clickCallback() {

    }

    render() {

        let now = this.state.now;

        return (
                <div>
                    <aside className="nv-calendar-aside">
                        <div className="nv-calendar">
                            <a className="nv-calendar--info" href="#!" onClick={this.clickHandler.bind(this)}>
                                <div className="nv-calendar--info--title">Календарь</div>
                                <div className="nv-calendar--info--desc">Выставок <span className="float-right">{now.format('YYYY')}</span></div>
                                {this.getArrow()}
                            </a>
                            
                            <div className="nv-calendar--city">
                                <input className="nv-calendar--city--input" type="text" placeholder="МОСКВА"/>
                            </div>
                            <div className="nv-calendar--date">
                                <div className="nv-calendar--date--day-and-month">
                                    <div className="nv-calendar--date--day-and-month--day">{now.format('DD')}</div>
                                    <div className="nv-calendar--date--day-and-month--month">{now.format('D MMMM').split(' ')[1]}</div>
                                </div>
                                <div className="nv-calendar--date--weekday-and-time">
                                    <div className="nv-calendar--date--weekday-and-time--weekday">{now.format('dddd')}</div>
                                    <div className="nv-calendar--date--weekday-and-time--time">{this.state.currentTime}</div>
                                </div>
                            </div>
                        </div>
                    </aside>

                    <div className="nv-calendar-container">
                        <Calendar calendarIsMounted={this.state.calendarIsMounted} isOpen={this.state.isOpen}/>
                    </div>
                </div>
        );
    }
}

render(<CalendarAside/>, $('.nv-calendar-block')[0]);