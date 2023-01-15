import { Component } from "react";
import "./QRComponent.css";
import QR from "../img/qr.png"
import RBCLogo from "../img/rbc-logo.png"
import { NavLink } from "react-router-dom";
class QRComponment extends Component {
    render() {
        return(
            <div className="qr-side">
                <div className="qr-backgroud">
                </div>
                <NavLink style={{position:"absolute",top:"150px",left:"0px",right:"0px",marginLeft:"auto", marginRight:"auto"}} to="/lang">Back to Home Page</NavLink>
                <img src={QR} className="qr-code"></img>
                <img src={RBCLogo} className="qr-rbc-logo"></img>
                <div className="qr-text">
                    Want to save this information for later?
                </div>
            </div>
        )
    }
}

export default QRComponment