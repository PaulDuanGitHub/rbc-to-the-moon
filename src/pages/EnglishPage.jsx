import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { MDBBtn } from "mdb-react-ui-kit";
import "./EnglishPage.css"
import QRComponment from "./QRComponenet";

class EnglishPage extends Component {
    render(){
        return(<div>
            <h1>
                Thank you for choosing RBC. 
            </h1>
            <div>
                
                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <MDBBtn size="lg" color="light" className="square-responsive" margin= "100px">
                Open a <br /> bank account
                </MDBBtn>

                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <MDBBtn size="lg" color="light" className="square-responsive" margin= "100px">
                How to send/recieve money from home
                </MDBBtn><br />

                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <MDBBtn size="lg" color="light" className="square-responsive" margin= "100px">
                Learn how banking works
                </MDBBtn>

                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <MDBBtn size="lg" color="light" className="square-responsive" margin= "100px">
                Find a bank institution near me
                </MDBBtn>

            <h4>
                In Canada, RBC banking is second to none. For us, it is most important that you feel comfortable with banking and understand how Canadian banking words <br />
            </h4>
                
            </div>
            
            {/* <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                    Block level button
                </Button>
                <Button variant="secondary" size="lg">
                    Block level button
                </Button>
            

        </div> */}

    
            <QRComponment></QRComponment>
            </div>);
    }
}

export default EnglishPage
