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
                <div className="row">
                    {/* <Link to="/"><div className="menuItem two columns offset-by-one">Home</div></Link> */}
                    <Link to="/book"><div className="menuItem two columns offset-by-two">Book</div></Link>
                    <Link to="/finaltable"><div className="menuItem two columns">Final Table</div></Link>
                    <Link to="/workshops"><div className="menuItem two columns">Workshops</div></Link>
                    <Link to="/about"><div className="menuItem two columns">About</div></Link>
                    <Link to="/contact"><div className="menuItem two columns">Contact</div></Link>
                </div>
            </div>
        )
    }
}