import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import "./EnglishPage.css"


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
            <div>
                
                {/* <Button size='lg' font-size='38px variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/ba"><MDBBtn size="lg" font-size="38px" color="266BBD" font-color="FFFFFF" className="square-responsive" variant="Open a bank account" onClick={this.test}>Open a <br /> bank account</MDBBtn></NavLink>


                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/ho"><MDBBtn size="lg" font-size="38px" color="light" className="square-responsive" variant="Learn how banking works" onClick={this.test}>Learn how banking works</MDBBtn></NavLink>
                <br />

                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/re"><MDBBtn size="lg" font-size="38px" color="light" className="square-responsive" variant="How to send/recieve money from home" onClick={this.test}>How to send/recieve money from home</MDBBtn></NavLink>

                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/fi"><MDBBtn size="lg" font-size="38px" color="light" className="square-responsive" variant="Find a bank institution near me" onClick={this.test}>Find a bank institution near me</MDBBtn></NavLink>
                

                 
            { <h1><NavLink to = "/lang"><Button size='lg' variant="Back to Home Page" onClick={this.test}>Back to Home Page</Button></NavLink></h1> }
            </div>

    

            </div>);
    }
}

export default EnglishPage
