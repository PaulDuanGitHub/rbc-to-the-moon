import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from "react-router-dom";
import QRComponment from "./QRComponenet";
import { Col, Row } from "react-bootstrap";
import "./LanguagePage.css"
import { withTranslation } from "react-i18next";


class LanguagePage extends Component {
    // changeLang = (lang) => {
    //     this.props.i18n.changeLanguage(lang);
    //     return;
    // }
    render(){
        return(<div>
            <Row style={{justifyContent:"center",width:"1080px", position:"absolute",left:"80px",top:"50px"}}>
                <Col>
                    <Row><div className="lang-page-greeting">Welcome to Canada</div></Row>
                    <Row><NavLink to="/ch"><Button onClick={() => this.props.i18n.changeLanguage('en')}size='lg' variant="English" className="lang-page-item">English</Button></NavLink></Row>
                    <Row><NavLink to="/ch"><Button onClick={() => this.props.i18n.changeLanguage('zh')} size='lg' variant="中文" className="lang-page-item">中文</Button></NavLink></Row>
                    <Row><NavLink to="/ch"><Button onClick={() => this.props.i18n.changeLanguage('ta')}size='lg' variant="தமிழ்" className="lang-page-item">தமிழ்</Button></NavLink></Row>
                    <Row><NavLink to="/ch"><Button onClick={() => this.props.i18n.changeLanguage('ar')}size='lg' variant="عربي" className="lang-page-item">عربي</Button></NavLink></Row>
                </Col>
                <Col>
                    <Row><div className="lang-page-greeting">Bienvenue au Canada</div></Row>
                    <Row><NavLink to="/ch"><Button onClick={() => this.props.i18n.changeLanguage('fr')}size='lg' variant="Français" className="lang-page-item">Français</Button></NavLink></Row>
                    <Row><NavLink to="/ch"><Button onClick={() => this.props.i18n.changeLanguage('tr')}size='lg' variant="Türkçe" className="lang-page-item">Türkçe</Button></NavLink></Row>
                    <Row><NavLink to="/ch"><Button onClick={() => this.props.i18n.changeLanguage('es')}size='lg' variant="Español" className="lang-page-item">Español</Button></NavLink></Row>
                    <Row><NavLink to="/ch"><Button onClick={() => this.props.i18n.changeLanguage('ko')}size='lg' variant="한국어" className="lang-page-item">한국어</Button></NavLink></Row>
                </Col>            
            </Row>
            <QRComponment></QRComponment>
        </div>);
        }
    }




export default withTranslation()(LanguagePage);
