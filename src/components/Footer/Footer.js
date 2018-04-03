import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import spades from './spades.svg';

export default class Footer extends Component {
    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="one columns">
                            <ul>
                                <Link to="/home"><li style={{margin: 2, fontSize: 10, color: 'white', listStyle: 'none'}}>Home</li></Link>
                                <Link to="/book"><li style={{margin: 2, fontSize: 10, color: 'white', listStyle: 'none'}}>Book</li></Link>
                                <Link to="/speaking"><li style={{margin: 2, fontSize: 10, color: 'white', listStyle: 'none'}}>Speaking</li></Link>
                                <Link to="/workshops"><li style={{margin: 2, fontSize: 10, color: 'white', listStyle: 'none'}}>Workshops</li></Link>
                            </ul>
                        </div>
                        <div className="one column offset-by-one">
                            <ul>
                                <Link to="/partner"><li style={{margin: 2, fontSize: 10, color: 'white', listStyle: 'none'}}>Partner</li></Link>
                                <Link to="/about"><li style={{margin: 2, fontSize: 10, color: 'white', listStyle: 'none'}}>About</li></Link>
                                <Link to="/contact"><li style={{margin: 2, fontSize: 10, color: 'white', listStyle: 'none'}}>Contact</li></Link>
                            </ul>
                        </div>
                        <div className="two columns offset-by-three" style={{textAlign: 'center'}}>
                            <img src={spades} alt="spade graphic" width={50} style={{marginTop: 5}} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}