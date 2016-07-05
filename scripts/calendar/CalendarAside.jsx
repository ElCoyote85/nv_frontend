import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import Calendar from './Calendar';

// import {Motion, spring} from 'react-motion';
import {Motion, presets, spring} from 'react-motion';

export default class CalendarAside extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calIsOpen: false,
            calendarIsMounted: false
        }
    }

    componentWillMount() {
        // this.setState({
        //     calIsOpen: false
        // });
    }

    componentDidMount() {

    }

    clickHandler(e) {
        // this.state.calIsOpen ? this.setState({calIsOpen: false}) : this.setState({calIsOpen: true});

        if(!this.state.calendarIsMounted) {
            this.setState({calendarIsMounted: true, calIsOpen: this.state.calIsOpen});
            render(
                <Calendar calIsOpen={this.state.calIsOpen} ref="Cal"/>,
                $('.nv-calendar-container')[0]
            );
        }

        // render(
        //     <Calendar calIsOpen={this.state.calIsOpen} />,
        //     $('.nv-calendar-container')[0]
        // );

        if(!this.state.calIsOpen ) {

            this.setState({calIsOpen: true});
            console.log(this.refs);
            this.refs.Cal.closeCalendar();

        } else {
            this.setState({calIsOpen: false});
            console.log('false');

            // render(
            //     <Calendar calIsOpen={this.state.calIsOpen} />,
            //     $('.nv-calendar-container')[0]
            // );
        }
    }

    render() {
        return (
                <div className="nv-calendar">
                    <a className="nv-calendar--info" href="#!" onClick={this.clickHandler.bind(this)} >
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

render(<CalendarAside/>, $('.nv-calendar-aside')[0]);