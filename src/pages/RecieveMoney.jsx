import { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./RecieveMoney.css"
class RecieveMoney extends Component {
    test = () => {
        return ;
    }
    render(){
        return(<div>
            <h2 className= "titlerecieve">
            How to Send & Recieve Money Globally
            </h2>
            <div class="boxrecieve"></div>
            <h2 className="subtitlerecieve">International Money Transfers</h2>

            <h3 className="headingrecieve">2 Free International Money Transfers per Month for a Year</h3>

            <h7 className="sentencerecieve" >
                • Send money any time, day or night<br />
                • Send to over 120 countries <br/>
                • Easy and secure transfers through RBC Online Banking or the RBC Mobile app
            </h7>
            <div class="outlinerecieve"></div>
            <div class="bluebuttonrecieve"></div>
            <div class="name"><input type="text" name="" id="name-input" /></div>
            <div class="nameword" margin="left">Name*</div>
            <div class="email"><input type="text" name="" id="email-input" /></div>
            <div class="emailword">Email*</div>
            <div class="phone"><input type="text" name="" id="phone-input" font-size="12px "/></div>
            <div class="phoneword">Phone Number</div>

            <div class="outline2recieve"></div>
            <div class="outline2textrecieve">Tell us a little about yourself and start sending and receiving money internationally today!</div>
            { <h1 class="buttonbook"><NavLink to="/su"><Button size='lg' variant="Book Appointment" onClick={this.test}>Book Appointment</Button></NavLink></h1> } <br />

            { <h1 class="backpage"><NavLink to = "/en"><Button size='lg' variant="Back to Home Page" onClick={this.test}>Back to Home Page</Button></NavLink></h1> }
            
            

            

        </div>);
        }
    }

export default RecieveMoney

/*
2 Free International Money Transfers per Month for a Year</h4>
                Send money any time, day or night<br />
                Send to over 120 countries<br />
                Easy and secure transfers through RBC Online Banking or the RBC Mobile app


                <h1>
                How to Send & Recieve Money Internationally
            </h1>
            <div>
                <h3>
                    International Money Transfer
                </h3>
            </div>
*/