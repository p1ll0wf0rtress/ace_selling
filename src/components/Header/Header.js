import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import '../../css/skeleton.css';
import chip from '../../chip.png';

export default class Header extends Component {
    constructor(props){
        super(props)

        this.state = {
            menu: false
        }
    }

    renderIf = (cond, view, view2) => {
        if(cond){
            return view
        } else if(!cond){
            return view2
        }
    }

    toggleMenu = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    render(){
        return(
            <header className="App-header">
                <div className="container">
                    <div className="row">
                        <div className="six columns">
                            <Link to="/" style={{textDecoration: 'none'}}>
                                <div className="logo_title">
                                    <div className="row">
                                        <div className="three columns">
                                            <h1 className="App-title">ACE Selling</h1>
                                        </div>
                                        <div className="two columns">
                                            <img src={chip} alt="logo" className="chip" height={75} width={75}/>
                                        </div>
                                        <div className="four columns">
                                            <p className="App-subtitle"><span style={{textDecoration: 'underline'}}>A</span>wareness.</p>
                                            <p className="App-subtitle"><span style={{textDecoration: 'underline'}}>C</span>ompetitiveness.</p>
                                            <p className="App-subtitle"><span style={{textDecoration: 'underline'}}>E</span>xecution.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="five columns offset-by-one menu"  style={{display: 'flex', marginTop: 25}}>
                            {/* <Link to="/" className="menuItem"><p className="menuItem">Home</p></Link> */}
                            <Link to="/book" className="menuItem"><p>Book</p></Link>
                            <Link to="/speaking" className="menuItem"><p>Speaking</p></Link>
                            <Link to="/workshops" className="menuItem"><p>Workshops</p></Link>
                            <Link to="/partner" className="menuItem"><p>Partner</p></Link>
                            <Link to="/about" className="menuItem"><p>About</p></Link>
                            <Link to="/contact" className="menuItem"><p>Contact</p></Link>
                        </div>
                        <div className="container mobileMenu">
                            {this.renderIf(this.state.menu,
                                <div className="row">
                                    <Link to="/" className="mobileMenuItem"><p className="mobileMenuItem">Home</p></Link>
                                    <Link to="/book" className="mobileMenuItem"><p className="mobileMenuItem">Book</p></Link>
                                    <Link to="/speaking" className="mobileMenuItem"><p className="mobileMenuItem">Speaking</p></Link>
                                    <Link to="/workshops" className="mobileMenuItem"><p className="mobileMenuItem">Workshops</p></Link>
                                    <Link to="/partner" className="mobileMenuItem"><p className="mobileMenuItem">Partner</p></Link>
                                    <Link to="/about" className="mobileMenuItem"><p className="mobileMenuItem">About</p></Link>
                                    <Link to="/contact" className="mobileMenuItem"><p className="mobileMenuItem">Contact</p></Link>
                                    <a onClick={this.toggleMenu} style={{marginTop: 5, fontSize: 24}}>&times;</a>
                                </div>,
                                <button onClick={this.toggleMenu}>Menu</button>
                            )}
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}