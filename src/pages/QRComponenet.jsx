import { Component } from "react";
import "./QRComponent.css";
import QR from "../img/qr.png"
import RBCLogo from "../img/rbc-logo.png"
import { NavLink } from "react-router-dom";
import { withTranslation } from "react-i18next";
class QRComponment extends Component {
    render() {
        return(
            <div className="qr-side">
                <div className="qr-backgroud">
                </div>
                <NavLink onClick={() => this.props.i18n.changeLanguage('en')} style={{position:"absolute",top:"150px",left:"0px",right:"0px",marginLeft:"auto", marginRight:"auto"}} to="/lang">{this.props.t("Back to Home Page")}</NavLink>
                <NavLink style={{position:"absolute",top:"200px",left:"0px",right:"0px",marginLeft:"auto", marginRight:"auto"}} to="/ch">{this.props.t("Back")}</NavLink>
                <img src={QR} className="qr-code"></img>
                <img src={RBCLogo} className="qr-rbc-logo"></img>
                <div className="qr-text">
                    {this.props.t("Want to save this information for later?")}
                </div>
            </div>
        )
    }
}

export default withTranslation()(QRComponment)