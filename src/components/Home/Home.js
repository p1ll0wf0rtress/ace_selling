import React, { Component } from 'react';
import banner from './banner.jpg';
import deal from './deal.svg';
import rick from './rick.jpg';
import './Home.css';

export default class Home extends Component {
    render(){
        
        return(
            <div style={{textAlign: 'center'}}>
                <div className="full-width" style={{backgroundImage: `url(${banner})`}}>
                    <div className="container">
                        <div className="row">
                            <h2 className="title_phrase"><span style={{letterSpacing: 'tight'}}>Stack The Deck</span>&nbsp;<span style={{color: '#b9172f', fontWeight: 'bold'}}>In Your Favor</span></h2>
                            <h4 style={{ color: 'white'}}>Get your sales team in the mindset of a master poker player</h4>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <h5>At the poker table, and the conference table, there can only be one winner.</h5>
                        <div className="ten columns offset-by-one">
                            <p>ACE Selling shows you how to leverage the same skills master poker players use to win million-dollars hands to win in sales. The same decision making can be applied to the sales process - giving you and your team the edge to reach your goals.</p>
                        </div>
                    </div>
                    <div className="row">
                        <img src={deal} className="graphic" alt="handshake graphic" />
                        <h3>Pick the Right Deals and Win</h3>
                        <div className="ten columns offset-by-one">
                            <p>As an invested professional, your team can't afford to waste valuable time, money and effort chasing oportunities that will never pan out. ACE Selling is designed to improve the quality of the opportunities in your pipeline and to improve your odds of winning each deal you pursue.</p>
                        </div>
                    </div>
                </div>
                {/* <div style={{backgroundColor: '#b3001b', color: "#fff", marginTop: 30, padding: 40}}>
                    <div className="container">
                        <div className="row">
                            <h5>
                                <em></em>
                            </h5>
                        </div>
                        <div className="row">
                            <div className="four columns offset-by-six">- ACE Selling Customer</div>
                        </div>
                    </div>
                </div> */}
                <div className="container" style={{marginTop: 50}}>
                    <div className="row">
                            <img src={rick} className="rick" alt="Rick Chouinard" />
                            <h3>Rick Chouinard</h3>
                        <div className="eight columns offset-by-two">
                            With over two decades of sales and poker experience, Rick Chouinard has experienced his share of sales wins and losses. With experience ranging from startups to Microsoft, his love of poker led him to observe, research and document how winning poker players and sales professionals use many of the same skills on the path to success.
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}