import React from 'react';
import {render} from 'react-dom';
import Calendar from './Calendar';
// import {Motion, spring} from 'react-motion';
import {Spring, presets} from 'react-motion';

export default class CalendarAside extends React.Component {
    constructor(props) {
        super(props);
    }

    clickHandler(e) {
        render(
            <Calendar />,
            $('.nv-calendar-container')[0]
        );
    }

    render() {
        return (
                <div className="nv-calendar">
                    <a className="nv-calendar--info" href="#!" onClick={this.clickHandler}>
                        <div className="nv-calendar--info--title">Календарь</div>
                        <div className="nv-calendar--info--desc">Выставок <span className="float-right">2016</span></div>
                        <Spring defaultValue={0} endValue={360}>

                            {val => {
                                 <div>{val}</div>
                            }
                            }
                        </Spring>
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

render(<CalendarAside/>, $('.nv-calendar-aside')[0]);