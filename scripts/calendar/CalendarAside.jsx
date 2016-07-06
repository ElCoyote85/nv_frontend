import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import Calendar from './Calendar';

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
    }

    componentDidMount() {

    }

    clickHandler(e) {

        this.setState({isOpen: !this.state.isOpen, calendarIsMounted: true});


        // render(
        //     <Calendar isOpen={this.state.isOpen} calendarIsMounted={this.state.calendarIsMounted} />,
        //     $('.nv-calendar-container')[0]
        // );
    }

    render() {
        // var styleArrow = {transform: 'scaleX(1)'};
        // this.state.isOpen ? styleArrow = {transform: 'scaleX(-1)'};

        return (
                <div>
                    <aside className="nv-calendar-aside">
                        <div className="nv-calendar">
                            <a className="nv-calendar--info" href="#!" onClick={this.clickHandler.bind(this)}>
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
                    </aside>

                    <div className="nv-calendar-container">
                        <Calendar calendarIsMounted={this.state.calendarIsMounted} isOpen={this.state.isOpen}/>
                    </div>
                </div>
        );
    }
}

render(<CalendarAside/>, $('.nv-calendar-block')[0]);