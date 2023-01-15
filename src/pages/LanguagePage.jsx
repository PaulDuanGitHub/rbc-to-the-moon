import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from "react-router-dom";
import QRComponment from "./QRComponenet";
import { Col, Row } from "react-bootstrap";
import "./LanguagePage.css"

class LanguagePage extends Component {
    test = () => {
        return ;
    }
    render(){
        return(<div>
            <Row style={{justifyContent:"center",width:"1080px"}}>
                <Col>
                    <Row><div className="lang-page-greeting">Welcome to Canada</div></Row>
                    <Row><NavLink to="/en"><Button size='lg' variant="English" className="lang-page-item">English</Button></NavLink></Row>
                    <Row><NavLink to="/zh"><Button size='lg' variant="中文" className="lang-page-item">中文</Button></NavLink></Row>
                    <Row><NavLink to="/ta"><Button size='lg' variant="தமிழ்" className="lang-page-item">தமிழ்</Button></NavLink></Row>
                    <Row><NavLink to="/ar"><Button size='lg' variant="عربي" className="lang-page-item">عربي</Button></NavLink></Row>
                </Col>
                <Col>
                    <Row><div className="lang-page-greeting">Bienvenue au Canada</div></Row>
                    <Row><NavLink to="/fr"><Button size='lg' variant="Français" className="lang-page-item">Français</Button></NavLink></Row>
                    <Row><NavLink to="/tr"><Button size='lg' variant="Türkçe" className="lang-page-item">Türkçe</Button></NavLink></Row>
                    <Row><NavLink to="/es"><Button size='lg' variant="Español" className="lang-page-item">Español</Button></NavLink></Row>
                    <Row><NavLink to="/ko"><Button size='lg' variant="한국어" className="lang-page-item">한국어</Button></NavLink></Row>
                </Col>            
            </Row>
            <QRComponment></QRComponment>
        </div>);
        }
    }




export default LanguagePage;
