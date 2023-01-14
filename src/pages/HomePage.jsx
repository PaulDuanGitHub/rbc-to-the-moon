import axios from "axios";
import { Component } from "react";
import {Row, Col, Container} from "react-bootstrap"
import BubbleComponent from "./BubbleComponent";
class HomePage extends Component{
    test = () =>{
        axios.get().then((res) => {

        })
    }
    render(){
        return(<div>
            <BubbleComponent></BubbleComponent>
        </div>);
    }
}

export default HomePage