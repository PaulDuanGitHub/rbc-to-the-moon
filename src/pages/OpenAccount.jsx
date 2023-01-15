import { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./OpenAccount.css"
class OpenAccount extends Component {
    test = () => {
        return ;
    }
    render(){
        return(<div>

    

    
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
            <div class="name"><input type="text" name="" id="name-input" /></div>
            <div class="nameword" margin="left">Name*</div>
            <div class="email"><input type="text" name="" id="email-input" /></div>
            <div class="emailword">Email*</div>
            <div class="phone"><input type="text" name="" id="phone-input" font-size="12px "/></div>
            <div class="phoneword">Phone Number</div>

            <div class="outline2"></div>
            <div class="outline2text">Tell us a little about yourself and an RBC Business Banking Specialist will contact you within one business day.</div>
            { <h1 class="buttonbook"><NavLink to="/su"><Button size='lg' variant="Book Appointment" onClick={this.test}>Book Appointment</Button></NavLink></h1> } <br />

            { <h1 class="backpage"><NavLink to = "/en"><Button size='lg' variant="Back to Home Page" onClick={this.test}>Back to Home Page</Button></NavLink></h1> }
            
            {/* <div className="subtitlearea">
                <h2 className="subtitle">What We Can Offer Newcomers</h2>
                <div class="rectangleba"></div> */}
                {/* <h7 className="subba">Settle in faster with the new RBC Newcomer Advantage<br /></h7>
            </div> */}

            {/* <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul> */}

            {/* <h7>- Unlimited debit transactions in Canada<br /></h7>
            <h7>- Free interac transfers for a year<br /></h7>
            <h7>- 2 free International Money Transfers per month for a year<br /></h7>
            <h7>- No RBC fee to use another bank’s ATM in Canada<br /></h7>
            <h2>
                If you would like to make an appointment, fill in your information: <br />
                
            </h2> */}
            <br />
            {/* <h1><NavLink to="/fo"><Button size='lg' variant="Appointment Form" onClick={this.test}>Appointment Form</Button></NavLink></h1> */}
            {/* <h1>Appointment Form <br /></h1>
            <h3>Name:<br />
                <input type="text" name="" id="" />
            </h3>
            <h3>Phone Number:<br /></h3>
                <input type="text" name="" id="" />
            <h3>Email:<br /></h3>
                <input type="text" name="" id="" />
            { <h1><NavLink to="/su"><Button size='lg' variant="Submit" onClick={this.test}>Submit</Button></NavLink></h1> } <br />

            { <h1><NavLink to = "/en"><Button size='lg' variant="Back" onClick={this.test}>Back</Button></NavLink></h1> }
 */}

            

        </div>);
        }
    }
export default OpenAccount