import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../Menu/Menu';
import './Header.css';
import '../../css/skeleton.css';
import chip from '../../chip.png';

export default class Header extends Component {
    render(){
        return(
            <header className="App-header">
                <div className="chip">
                    
                </div>
                <div className="container">
                    <div className="row">
                        <div className="four columns" style={{verticalAlign: 'middle'}}>
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <div className="logo_title">
                                    <div className="row">
                                        <div className="five columns">
                                            <img src={chip} alt="logo" height={75} width={75}/> 
                                        </div>
                                        <div className="six columns" style={{verticalAlign: 'middle'}}>
                                            <h1 className="App-title">ACE Selling</h1>
                                        </div>
                                    {/* <h5 className="App-subtitle">Awareness. Competitiveness. Execution.</h5> */}
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="seven columns offset-by-one"  style={{display: 'flex', alignContent: 'center'}}>
                            <Menu />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}