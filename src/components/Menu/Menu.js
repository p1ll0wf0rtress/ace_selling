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
            <div className="container menu">
                <div className="row" style={{marginTop: '30px'}}>
                    <Link to="/finaltable"><div className="menuItem two columns offset-by-two">Partner</div></Link>
                    <Link to="/workshops"><div className="menuItem three columns">Workshops</div></Link>
                    <Link to="/book"><div className="menuItem two columns">Book</div></Link>
                    <Link to="/about"><div className="menuItem two columns">About</div></Link>
                    <Link to="/contact"><div className="menuItem two columns">Contact</div></Link>
                </div>
            </div>
        )
    }
}