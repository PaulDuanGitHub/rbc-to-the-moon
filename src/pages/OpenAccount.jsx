import { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./OpenAccount.css"
import QRComponment from "./QRComponenet";
import { withTranslation } from "react-i18next";
class OpenAccount extends Component {
    test = () => {
        return ;
    }
    render(){
        return(<div style={{position:"relative",top:"-50px"}}>
            <h2 className= "titleba">
                {this.props.t("Open a Bank Account")}
            </h2>
            <div class="box"></div>
            <h2 className="subtitleba">{this.props.t("What We Can Offer Newcomers")}</h2>

            <h3 className="heading">{this.props.t("Settle in faster with the RBC Newcomer Advantage")}</h3>

            <div className="sentence" >
                • {this.props.t("Start With a Canadian Bank Account")} <br/>
                • {this.props.t("Add a Canadian Credit Card")} <br/>
                • {this.props.t("Safe Deposit Box")}
            </div>
            <div class="outline"></div>
            <div class="bluebutton"></div>
            <div class="name"><input placeholder="Please enter your info" type="text" name="" id="name-input" /></div>
            <div class="nameword" margin="left">{this.props.t("Name")}*</div>
            <div class="email"><input placeholder="Please enter your info" type="text" name="" id="email-input" /></div>
            <div class="emailword">{this.props.t("Email")}*</div>
            <div class="phone"><input placeholder="Please enter your info" type="text" name="" id="phone-input" fontSize="12px "/></div>
            <div class="phoneword">{this.props.t("Phone Number")}</div>

            <div class="outline2"></div>
            <div class="outline2text">{this.props.t("Tell us a little about yourself and an RBC Business Banking Specialist will contact you within one business day.")}</div>
            { <h1 class="buttonbook"><NavLink to="/su"><Button style={{position:"absolute",right:"50px"}}size='lg' variant="Book Appointment">{this.props.t("Book Appointment")}</Button></NavLink></h1> } <br />
            <QRComponment></QRComponment>
        </div>);
        }
    }
export default withTranslation()(OpenAccount)