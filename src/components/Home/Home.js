import React, { Component } from 'react';
import banner from './banner.jpg';
import deal from './deal.svg';
import cards from './cards.svg';
import './Home.css';
import {Link} from 'react-router-dom';

export default class Home extends Component {
    constructor(props){
        super(props)
        console.log(this.props.location.pathname)
    }

    render(){
        
        return(
            <div style={{textAlign: 'center'}}>
                <div className="full-width" style={{backgroundImage: `url(${banner})`}}>
                    <div className="container">
                        <div className="row">
                            <h2 className="title_phrase">Stack The Deck In Your Favor</h2>
                            <h5 style={{ color: 'white'}}>Get your sales team in the mindset of a master poker professional</h5>
                        </div>
                    </div>
                </div>
                <div className="container" style={{marginBottom: 60}}>
                    <div className="row">
                        <img src={deal} className="graphic" alt="handshake graphic" />
                        <h3>Pick the Right Deals and Win</h3>
                        <div className="eight columns offset-by-two">
                            <p>As an invested professional, your team can't afford to waste valuable time, money and effort chasing oportunities that will never pan out. ACE Selling is designed to improve the quality of the opportunities in your pipeline and to improve your odds of winning each deal you pursue.</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#2e3532', color: '#fff', paddingTop: 40, paddingBottom: 40}} className="clipPolygon">
                    <div className="container">
                        <div className="row chevronContainer">
                            <h5 style={{marginTop: 40}}>At the poker table, and the conference table, there can only be one winner.</h5>
                            <div className="ten columns offset-by-one">
                                <p>ACE Selling shows you how to leverage the same skills master poker players use to win million-dollars hands to win in sales. The same decision making can be applied to the sales process - giving you and your team the edge to reach your goals.</p>
                            </div>
                        </div>
                        <div className="row">
                            <Link to="contact"><button style={{color: '#fff'}}>Get the ACE Selling Edge</button></Link>
                        </div>
                    </div>
                </div>
                <div className="container" style={{paddingTop: 60}}>
                    <div className="row">
                        <div className="five columns">
                            <img src={require('./poker.svg')} alt="poker handle" height={75} />
                            <h5>Find the right hand.</h5>
                            <p>Most training programs focus on closing. ACE Selling focuses on the prospect and qualification stages. Give your team the ability to know who they should be spending their time on to pick the right hand.</p>
                        </div>
                        <div className="five columns offset-by-two">
                            <img src={require('./win.svg')} alt="win crown" height={75} />
                            <h5>Spend time winning.</h5>
                            <p>We teach your time to properly recognizing where to invest their and gain the <strong>ACE Selling Edge</strong>. We take your sales team through the process of a poker hand to convey key concepts to spend more time winning.</p>
                        </div>
                    </div>
                </div>
                <div className="container" style={{marginTop: 50}}>
                <hr/>
                    <div className="row">
                        <h3>Open A New Deck of Opportunity</h3>
                        <img src={cards} className="graphic" alt="poker graphic" />
                        <div className="ten columns offset-by-one">
                            <h5>ACE Selling Partner Program</h5>
                            <p>Ready to take on the world of sales as an entreprenuer? The ACE Selling Partner Program is an unlimited potential opportunity for sales professionals who have a passion sales, poker and imparting their sales experience on the next generation of professionals.</p>
                            <Link to="partner"><button>Become A Partner</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}