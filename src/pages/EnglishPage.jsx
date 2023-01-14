import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import "./EnglishPage.css"

class EnglishPage extends Component {
    render(){
        return(<div>
            <h1>
                Thank you for choosing RBC. 
            </h1>
            <div>
                
                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/ba"><MDBBtn size="lg" color="light" className="square-responsive" variant="Open a bank account" onClick={this.test}>Open a <br /> bank account</MDBBtn></NavLink>{'l '}


                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/ho"><MDBBtn size="lg" color="light" className="square-responsive" variant="Learn how banking works" onClick={this.test}>Learn how banking works</MDBBtn></NavLink>{'l '}
                <br />

                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/le"><MDBBtn size="lg" color="light" className="square-responsive" variant="How to send/recieve money from home" onClick={this.test}>How to send/recieve money from home</MDBBtn></NavLink>{'l '}

                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <NavLink to="/fi"><MDBBtn size="lg" color="light" className="square-responsive" variant="Find a bank institution near me" onClick={this.test}>Find a bank institution near me</MDBBtn></NavLink>{'l '}
                

            <h4>
                In Canada, RBC banking is second to none. For us, it is most important that you feel comfortable with banking and understand how Canadian banking words <br />
            </h4>
                
            </div>
            


    

            </div>);
    }
}

export default EnglishPage
