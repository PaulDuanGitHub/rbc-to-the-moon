import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from "react-router-dom";

class LanguagePage extends Component {
    test = () => {
        return ;
    }
    render(){
        return(<div>
            <h2>
                Welcome to Canada.<br /> 
            </h2>
            <NavLink to="/en"><Button size='lg' variant="English" onClick={this.test}>English</Button></NavLink>{'l '}
            <Button size='lg' variant="Français">Français</Button>{' '}
            <Button size='lg' variant="中文">中文</Button>{' '}
            <Button size='lg' variant="தமிழ்">தமிழ்</Button>{' '}<br />
            <Button size='lg' variant="Türkçe">Türkçe</Button>{' '}
            <Button size='lg' variant="Español">Español</Button>{' '}
            <Button size='lg' variant="عربي">عربي</Button>{' '}
            <Button size='lg' variant="한국어">한국어</Button>{' '}<br />
            <h2>
                Bienvenue en Canada.
            </h2>
        </div>);
        }
    }




export default LanguagePage;