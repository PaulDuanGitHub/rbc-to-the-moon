import { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import QRComponment from "./QRComponenet";

class Submit extends Component {
    render(){
        return(<div>
            <h1>Thanks for filling out our form!</h1>
            <div></div>
            <QRComponment></QRComponment>
            </div>);
    }
}

export default Submit