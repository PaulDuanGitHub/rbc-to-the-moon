import { Component } from "react";
import {Row, Col, Container} from "react-bootstrap"
import "./BubbleComponent.css"
import "./HomePage.css"
class BubbleComponent extends Component{
    render(){
        return(
        <div style={{position:"relative"}} className="homepage">
            <div style={{left:"151px",top:"90px"}} className="bubble-text">
                halo
            </div>
            <div style={{left:"292px",top:"107px"}} className="bubble-text">
                hi
            </div>
            <div style={{left:"64px",top:"203px"}} className="bubble-text">
                hola
            </div>
            <div style={{left:"204px",top:"196px"}} className="bubble-text">
                ہیلو
            </div>
            <div style={{left:"232px",top:"702px"}} className="bubble-text">
                merhaba
            </div>
            <div style={{left:"82px",top:"669px"}} className="bubble-text">
                hallo
            </div>
            <div style={{left:"167px",top:"596px"}} className="bubble-text">
                こんにちは
            </div>
            <div style={{left:"238px",top:"490px"}} className="bubble-text">
                bonjour
            </div>
            <div style={{left:"82px",top:"499px"}} className="bubble-text">
                أهلا
            </div>
            <div style={{left:"36px",top:"350px"}} className="bubble-text">
                namaste
            </div>
            <div style={{left:"142px",top:"276px"}} className="bubble-text">
                olá
            </div>
            <div style={{left:"82px",top:"499px"}} className="bubble-text">
                أهلا    
            </div>
            <div style={{left:"242px",top:"321px"}} className="bubble-text">
                Привет
            </div>
            <div style={{left:"278px",top:"236px"}} className="bubble-text">
                你好
            </div>
        </div>
        );
    }
}

export default BubbleComponent
