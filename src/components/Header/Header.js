import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Header.css';

export default class Header extends Component {
    render(){
        return(
            <header className="App-header">
                <Link to="/" style={{textDecoration: 'none'}}>
                    <div className="logo_title">
                        <h1 className="App-title">ACE Selling</h1>
                        <h5 className="App-subtitle">Awareness. Competitiveness. Execution.</h5>
                    </div>
                </Link>
                <Menu />
            </header>
        )
    }
}