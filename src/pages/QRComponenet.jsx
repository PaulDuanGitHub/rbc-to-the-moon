import { Component } from "react";
import "./QRComponent.css";
import QR from "../img/qr.png"
class QRComponment extends Component {
    render() {
        return(
            <div style={{position:"fixed",bottom: 15,right: 15}}>
                <div className="qr-text">
                    For more information on banking with RBC, scan this QR code or press the QR code to print a copy.
                </div>
                <img src={QR} className="qr-code"></img>
            </div>
        )
    }
}

export default QRComponment