import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import "./EnglishPage.css"
import QRComponment from "./QRComponenet";


class EnglishPage extends Component {
    render(){
        return(<div>
            <div>
            <h1 className="title">

                Welcome to Canada
                
            </h1>
            <h2 className ="subtitle">
                Thank you for choosing RBC.
            </h2>
            </div>
            <div style={{position:"relative", left:"-250px",marginTop:"50px"}}>
                
                {/* <Button size='lg' font-size='38px variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/ba"><MDBBtn size="lg" font-size="38px" color="266BBD" font-color="FFFFFF" className="square-responsive" variant="Open a bank account" onClick={this.test}>Open a <br /> Bank Account</MDBBtn></NavLink>


                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/ho"><MDBBtn size="lg" font-size="38px" color="light" className="square-responsive" variant="Learn how banking works" onClick={this.test}>Learn How Banking Works</MDBBtn></NavLink>
                <br />

                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/re"><MDBBtn size="lg" font-size="38px" color="light" className="square-responsive" variant="How to send/recieve money from home" onClick={this.test}>How to Send/Recieve Money From Home</MDBBtn></NavLink>

                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/fi"><MDBBtn size="lg" font-size="38px" color="light" className="square-responsive" variant="Find a bank institution near me" onClick={this.test}>Find a Bank Institution Near me</MDBBtn></NavLink>
            </div>
            <QRComponment></QRComponment>
            </div>);
    }
}

export default EnglishPage
