import { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';

class Submit extends Component {
    render(){
        return(<div>
            <h1>Thanks for filling out our form!</h1>
            <div></div>
            { <h1><NavLink to = "/ba"><Button size='lg' variant="Back" onClick={this.test}>Back</Button></NavLink></h1> }
            </div>);
    }
}

export default Submit