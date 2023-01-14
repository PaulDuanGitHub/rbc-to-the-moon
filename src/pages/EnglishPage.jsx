import { Component } from "react";
import { Col, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { MDBBtn } from "mdb-react-ui-kit";
import "./EnglishPage.css"

class EnglishPage extends Component {
    render(){
        return(<div>
            <h1>
                Thank you for choosing RBC. 
            </h1>
            <div>
                <h3>
                    In Canada, RBC banking is second to none. For us, it is most important that you feel comfortable with banking and understand how Canadian banking words <br />
                </h3>
                {/* <Button size='lg' variant="Open a bank account">Open a bank account</Button>{' '} */}
                <MDBBtn color="dark" className="square-responsive">
                Button
                </MDBBtn>

                <Button size='lg' variant="Learn how banking works">Learn how banking works</Button>{' '}<br />

                <Button size='lg' variant="How to send/recieve money from home">How to send/recieve money from home</Button>{' '}
 
                <Button size='lg' variant="Find a bank institution near me">Find a bank institution near me</Button>{' '}
                
            </div>
            
            <div className="d-grid gap-2">
                <Button variant="primary" size="lg">
                    Block level button
                </Button>
                <Button variant="secondary" size="lg">
                    Block level button
                </Button>
            

            </div>

    

            </div>);
    }
}

export default EnglishPage
