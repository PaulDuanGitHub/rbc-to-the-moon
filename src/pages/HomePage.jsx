import axios from "axios";
import { Component } from "react";
import {Row, Col, Container} from "react-bootstrap"
import BubbleComponent from "./BubbleComponent";
import QRComponment from "./QRComponenet";
import { NavLink } from "react-router-dom";
class HomePage extends Component{
    test = () =>{
        axios.get().then((res) => {

        })
    }
    render(){
        return(<div>
            <NavLink to="/lang"><BubbleComponent></BubbleComponent></NavLink>
            <QRComponment/>
        </div>);
    }
}

export default HomePage