import { Component } from "react";
import "./QRComponent.css";
import QR from "../img/qr.png"
import RBCLogo from "../img/rbc-logo.png"
class QRComponment extends Component {
    render() {
        return(
            <div className="qr-side">
                <img src={RBCLogo} className="qr-rbc-logo"></img>
                <div className="qr-text">
                    Want to save this information for later?
                </div>
                <img src={QR} className="qr-code"></img>
            </div>
        )
    }
}

export default QRComponment