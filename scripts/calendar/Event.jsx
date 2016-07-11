import React from 'react';
import {render} from 'react-dom';

import moment from 'moment';

import {Motion, spring, presets} from 'react-motion';

export default class Event extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            style: {height: 40},
            readmoreStyle: {height: `${0}px`}
        };
    }

    componentWillUpdate() {

    }

    componentWillMount(){
        this.event = this.props.event;
    }

    clickHandler(e){
        this.state.isOpen = !this.state.isOpen;
        this.setState(this.state);
        console.log(this.state.isOpen );
        // this.forceUpdate();
        // if(this.state.isOpen) {
        //     this.state.readmoreStyle = {height: 0}
        // } else {
        //     this.state.readmoreStyle = {height: 300}
        // }
    }

    getImage() {
        if( this.state.isOpen) {
            return <div style={{textAlign: 'center'}}><img style={{width: '100px'}} src="http://static.navystavke.ru/expos/bigger/12504.png"/></div>
        }
    }
    
    render() {
        // let offset = this.props.offset;
        // let title = this.props.title;
        // let descr = this.props.description;
        // let link = this.props.link;
        if(this.props.firstDate !== undefined) {
            var firstDate = this.props.firstDate;
            this.offset = this.length = 0;
            this.offset = moment(this.event.start).diff(firstDate, 'days');
            this.length = moment(this.event.stop).diff(this.event.start, 'days') + 1;


        }

        var  readmoreStyle = {start: {height: 0}, stop: {height: 0}};
        if(this.state.isOpen) {
            readmoreStyle.start = {height: 40};
            readmoreStyle.stop = {height: 300};
        } else {
            readmoreStyle.start = {height: 300};
            readmoreStyle.stop = {height: 40};
        }

        let event = this.event;

        

        return (
            <Motion
                defaultStyle={{height: readmoreStyle.start.height}}
                style={{ height: spring(readmoreStyle.stop.height) }}>

                {val => {
                    let newStyle = {
                        width: `${this.length * 48}px`,
                        left: `${this.offset * 48}px`,
                        right: 0,
                        // backgroundColor: 'white',
                        height: `${val.height}px`
                    };
                    return <div className="nv-calendar-events-row--event" style={newStyle}>
                        <a className="nv-calendar-events-row--event-header" href="#!" style={{display: 'block'}} title={event.title} onClick={this.clickHandler.bind(this)}>
                            {event.title}
                        </a>
                                <div className="nv-calendar-events-row--event-body">
                                    {this.getImage()}

                                    <p className="nv-calendar-events-row--event-description">{event.description}</p>
                                    <a href="">{event.website}</a>
                                </div>


                    </div>
                }}
            </Motion>
        );
    }
}