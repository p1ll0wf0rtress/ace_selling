import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

export default class Menu  extends Component {
    constructor(props){
        super(props)
        this.state ={}
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    <Link to="/"><div className="offset-by-one two columns">Home</div></Link>
                    <Link to="/"><div className="two columns">Book</div></Link>
                    <Link to="/"><div className="two columns">Final Table</div></Link>
                    <Link to="/"><div className="two columns">Workshops</div></Link>
                    <Link to="/"><div className="two columns">About</div></Link>
                    <Link to="/contact"><div className="two columns">Contact</div></Link>
                </div>
            </div>
        )
    }
}