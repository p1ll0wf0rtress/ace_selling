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
                    <Link to="/"><button>Home</button></Link>
                    <button>Book</button>
                    <button>Final Table</button>
                    <button>Workshops</button>
                    <button>About</button>
                    <Link to="/contact"><button >Contact</button></Link>
                </div>
            </div>
        )
    }
}