/**
 * Created by Acer on 12.07.2016.
 */

import React from 'react';
import {render} from 'react-dom';

import {NV_PROPS} from 'nv_props';

export default class Visitors extends React.Component {
    constructor(props) {
        super(props);
        this.visitors = [];
    }

    componentWillMount() {

    }

    componentDidMount() {
        // let visitorsDivs = this.getVisitors().map(function (visitor) {
        //     return <a href="#"><img className="nv-visitors-list--people--person" src={visitor.imageUrl} alt="#"/></a>
        // })
        // this.state.visitors = visitorsDivs;
        this.getVisitors();
    }

    getVisitors() {
        let that = this;
        // $.ajax('http://ex:82/json/index/visitors', {
        $.ajax(`http://${NV_PROPS.MAINHOST}/json/index/visitors`, {
            method: 'GET',
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        })
        .done(function (data) {
            let visitors = data;
            let visitorsDivs = visitors.map(function (visitor, index) {
                let fullname = `${visitor.firstName} ${visitor.lastName}`;
                return <a href="#"
                          title={fullname}
                          key={index}>
                    <img className="nv-visitors-list--people--person" src={visitor.imageUrl} title="" alt={fullname}/>
                </a>
            });
            that.visitors = visitorsDivs;
            that.forceUpdate();
        })
        .fail(function (xhr) {
            that.visitors = [];
            console.log(xhr);
        })
    }

    render() {
        return <div className="nv-visitors-list">
            <div className="nv-visitors-list--top">
                <div className="nv-visitors-list--top--desc">
                <span>Посетители сети виртуальных выставок <span
                    className="__nv-text-blue">14842</span></span>
                </div>
                <div className="nv-visitors-list--top--became-visitor"><span><a href="#">Стань посетителем</a></span></div>
                <div className="nv-visitors-list--top--became-participant"><span><a href="#">Стань участником</a></span></div>
            </div>
            <div className="nv-visitors-list--people">
                {this.visitors}
            </div>
        </div>

    }
}

render(<Visitors/>, $('.nv-visitors-container')[0]);