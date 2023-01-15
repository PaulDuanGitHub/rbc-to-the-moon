import { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';

class RecieveMoney extends Component {
    render(){
        return(<div>
            <h1>
                How to Send & Recieve Money From Home
            </h1>
            <div>
                <h3>
                    International Money Transfer
                </h3>
            </div>
            <h4>2 Free International Money Transfers per Month for a Year</h4>
                Send money any time, day or night<br />
                Send to over 120 countries<br />
                Easy and secure transfers through RBC Online Banking or the RBC Mobile app

            <h1>Appointment Form <br /></h1>
            <h3>Name:<br />
                <input type="text" name="" id="" />
            </h3>
            <h3>Phone Number:<br /></h3>
                <input type="text" name="" id="" />
            <h3>Email:<br /></h3>
                <input type="text" name="" id="" />
            { <h1><NavLink to="/su"><Button size='lg' variant="Submit" onClick={this.test}>Submit</Button></NavLink></h1> } <br />

            { <h1><NavLink to = "/en"><Button size='lg' variant="Back" onClick={this.test}>Back</Button></NavLink></h1> }

            </div>);
    }
    
}

export default RecieveMoney