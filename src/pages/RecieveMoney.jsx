import { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "./RecieveMoney.css"
import QRComponment from "./QRComponenet";
import { withTranslation } from "react-i18next";
class RecieveMoney extends Component {
    test = () => {
        return ;
    }
    render(){
        return(<div>
            <h2 className= "titlerecieve">
            {/* How to Send & Recieve Money Globally */}
            {this.props.t("Send & Receive Money Internationally")}
            </h2>
            <div class="boxrecieve"></div>
            <h2 className="subtitlerecieve">{this.props.t("International Money Transfers")}</h2>

            <h3 className="headingrecieve">{this.props.t("2 Free International Money Transfers per Month for a Year")}</h3>

            <h7 className="sentencerecieve" >
                • {this.props.t("Send money any time, day or night")}<br />
                • {this.props.t("Send to over 120 countries")} <br/>
                • {this.props.t("Easy and secure transfers through RBC Online Banking or the RBC Mobile app")}
            </h7>
            <div class="outlinerecieve"></div>
            <div class="bluebuttonrecieve"></div>
            <div class="name"><input type="text" name="" id="name-input" /></div>
            <div class="nameword" margin="left">{this.props.t("Name")}*</div>
            <div class="email"><input type="text" name="" id="email-input" /></div>
            <div class="emailword">{this.props.t("Email")}*</div>
            <div class="phone"><input type="text" name="" id="phone-input" font-size="12px "/></div>
            <div class="phoneword">{this.props.t("Phone Number")}</div>

            <div class="outline2recieve"></div>
            <div class="outline2textrecieve">{this.props.t("Tell us a little about yourself and start sending and receiving money internationally today.")}</div>
            { <h1 class="buttonbook"><NavLink to="/su"><Button size='lg' variant="Book Appointment" onClick={this.test}>{this.props.t("Book Appointment")}</Button></NavLink></h1> }
            <QRComponment></QRComponment>
        </div>);
        }
    }

export default withTranslation()(RecieveMoney)

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