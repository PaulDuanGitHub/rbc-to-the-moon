import { Component } from "react";
import "./QRComponent.css"
class QRComponment extends Component {
    render() {
        return(
            <div style={{position:"absolute",bottom: 0,right: 15}}>
                <img className="qr-code"></img>
            </div>
        )
    }
}

export default QRComponment