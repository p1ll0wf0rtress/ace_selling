import React, { Component } from 'react';
import Page from '../Page/Page';

export default class Book extends Component{
    render(){
        return(
            <div className="container" ref="pageContent">
                <Page route={this.props.location}/>
            </div>
        )
    }
}