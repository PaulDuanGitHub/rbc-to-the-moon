import { Component } from "react";
import "./QRComponent.css";
import QR from "../img/qr.png"
import RBCLogo from "../img/rbc-logo.png"
class QRComponment extends Component {
    render() {
        return(
            <div className="qr-side">
                <div className="qr-backgroud">
                </div>
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