import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

class LanguagePage extends Component {
    render(){
        return(<div>
            <h2>
                Welcome to Canada.<br /> 
            </h2>
            <Button variant="English">English</Button>{' '}
            <Button variant="Français">Français</Button>{' '}
            <Button variant="中文">中文</Button>{' '}
            <Button variant="தமிழ்">தமிழ்</Button>{' '}<br />
            <Button variant="Türkçe">Türkçe</Button>{' '}
            <Button variant="Español">Español</Button>{' '}
            <Button variant="عربي">عربي</Button>{' '}
            <Button variant="한국어">한국어</Button>{' '}<br />
            <h2>
                Bienvenue en Canada.
            </h2>
        </div>);
        }
    }




export default LanguagePage;
