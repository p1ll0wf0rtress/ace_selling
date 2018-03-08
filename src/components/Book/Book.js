import React, { Component } from 'react';
import client from '../../imports/sanityclient';

export default class Book extends Component {

    componentDidMount(){
        client
            .fetch(`*[_type == "raw" && title == "/book"][0]`)
            .then((res) => {
                this.refs.bookContent.innerHTML = res.body;
            })
    }

    render(){
        return(
            <div className="container pageContent" ref="bookContent"></div>
        )
    }
}