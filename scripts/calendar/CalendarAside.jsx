import React from 'react';
import {render} from 'react-dom';

export default class CalendarAside extends React.Component {
    constructor(props) {
        super(props);
    }

    onClickHandler(e) {
    }

    render() {
        return (
            <div className="nv-calendar">
                <a className="nv-calendar--info" href="#!" onClick={this.onClickHandler}>
                    <div className="nv-calendar--info--title">Календарь</div>
                    <div className="nv-calendar--info--desc">Выставок <span className="float-right">2016</span></div>
                </a>
                <div className="nv-calendar--city">
                    <input className="nv-calendar--city--input" type="text" placeholder="МОСКВА"/>
                </div>
                <div className="nv-calendar--date">
                    <div className="nv-calendar--date--day-and-month">
                        <div className="nv-calendar--date--day-and-month--day">26</div>
                        <div className="nv-calendar--date--day-and-month--month">февраля</div>
                    </div>
                    <div className="nv-calendar--date--weekday-and-time">
                        <div className="nv-calendar--date--weekday-and-time--weekday">понедельник</div>
                        <div className="nv-calendar--date--weekday-and-time--time">14:30</div>
                    </div>
                </div>
            </div>
        );
    }
}

// render(<CalendarAside/>, $('.nv-calendar-aside')[0]);