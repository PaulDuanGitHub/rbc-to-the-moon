import { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./OpenAccount.css"
import QRComponment from "./QRComponenet";
class OpenAccount extends Component {
    test = () => {
        return ;
    }
    render(){
        return(<div style={{position:"relative",top:"-50px"}}>
            <h2 className= "titleba">
                Open a Bank Account
                
            </h2>
            <div class="box"></div>
            <h2 className="subtitleba">What We Can Offer Newcomers</h2>

            <h3 className="heading">Settle in faster with the RBC Newcomer Advantage</h3>

            <h7 className="sentence" >
                • Start with a Canadian Bank Account
                • Add a Canadian Credit Card <br/>
                • Safe Deposit Box
            </h7>
            <div class="outline"></div>
            <div class="bluebutton"></div>
            <div class="name"><input placeholder="Please enter your info" type="text" name="" id="name-input" /></div>
            <div class="nameword" margin="left">Name*</div>
            <div class="email"><input placeholder="Please enter your info" type="text" name="" id="email-input" /></div>
            <div class="emailword">Email*</div>
            <div class="phone"><input placeholder="Please enter your info" type="text" name="" id="phone-input" font-size="12px "/></div>
            <div class="phoneword">Phone Number</div>

            <div class="outline2"></div>
            <div class="outline2text">Tell us a little about yourself and an RBC Business Banking Specialist will contact you within one business day.</div>
            { <h1 class="buttonbook"><NavLink to="/su"><Button size='lg' variant="Book Appointment">Book Appointment</Button></NavLink></h1> } <br />
            <QRComponment></QRComponment>
        </div>);
        }
    }
export default OpenAccount