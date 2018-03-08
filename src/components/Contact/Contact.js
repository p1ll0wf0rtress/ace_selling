import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
    render(){
        return(
            <div className="container pageContent">
                <div className="row pageTitle">
                    <h4>ACE Selling is all about communication</h4>
                    <p>Ante up and send us a message!</p>
                </div>
                <form>
                    <div className="row">
                        <div className="four columns offset-by-two">
                            <label htmlFor="first_name">First Name</label>
                            <input className="u-full-width" placeholder="Your first name" id="first_name" autoComplete="off" type="text" onChange={this.handleFirstName}/>
                        </div>
                        <div className="four columns">
                            <label htmlFor="last_name">Last Name</label>
                            <input className="u-full-width" placeholder="Your last name" id="last_name" autoComplete="off" type="text" onChange={this.handleLastName}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="four columns offset-by-two">
                        <label htmlFor="emailInput">Email</label>
                        <input className="u-full-width" placeholder="example@mailbox.com" id="emailInput" autoComplete="off" type="email" onChange={this.handleEmail}/>
                        </div>
                        <div className="four columns">
                        <label htmlFor="phoneInput">Phone</label>
                        <input className="u-full-width" placeholder="(555) 555-5555" id="phoneInput" autoComplete="off" type="text" onChange={this.handlePhone}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="eight columns offset-by-two">
                        <label htmlFor="message">Message</label>
                        <textarea className="u-full-width" placeholder="Hi, Rick! …" id="message" onChange={this.handleMessage}></textarea>
                        <input className="button-primary" value="Submit" autoComplete="off" type="submit" onClick={this.sendMessage}/>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}