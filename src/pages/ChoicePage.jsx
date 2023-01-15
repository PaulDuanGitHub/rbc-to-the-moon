import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import "./ChoicePage.css"
import QRComponment from "./QRComponenet";
import { withTranslation } from "react-i18next";

class ChoicePage extends Component {
    render(){
        return(<div>
            <div>
            <h1 className="title">

                {this.props.t("Welcome to Canada")}
                
            </h1>
            <h2 className ="subtitle">
                {this.props.t("Thank you for choosing RBC")}
            </h2>
            </div>
            <div style={{position:"relative", left:"-250px",marginTop:"50px"}}>
                
                {/* <Button size='lg' font-size='38px variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/ba"><MDBBtn size="lg" fontSize="38px" color="266BBD" font-color="FFFFFF" className="square-responsive" variant="Open a bank account" onClick={this.test}>{this.props.t("Open a Bank Account")}</MDBBtn></NavLink>


                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/ho"><MDBBtn size="lg" fontSize="38px" color="light" className="square-responsive" variant="Learn how banking works" onClick={this.test}>{this.props.t("Learn How Banking Works in Canada")}</MDBBtn></NavLink>
                <br />

                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/re"><MDBBtn size="lg" fontSize="38px" color="light" className="square-responsive" variant="How to send/recieve money from home" onClick={this.test}>{this.props.t("Send & Receive Money Internationally")}</MDBBtn></NavLink>

                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/fi"><MDBBtn size="lg" fontSize="38px" color="light" className="square-responsive" variant="Find a Banking Institution Near Me" onClick={this.test}>{this.props.t("Find a Banking Institution Near Me")}</MDBBtn></NavLink>
            </div>
            <QRComponment></QRComponment>
            </div>);
    }
}

export default withTranslation()(ChoicePage)
