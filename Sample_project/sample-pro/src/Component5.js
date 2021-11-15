//Form Handling
import React,{useState} from "react";
import { Form,Button } from "react-bootstrap";

import './Component5.css';

const Component5 = ()=>{
    const [state,setState] = useState({
        email : "",
        pw: ""
    });

    const handleEmail = (event)=>{
        setState({
            ...state,
            email : event.target.value
        })
    }
    const handlePw = (event)=>{
        setState({
            ...state,
            pw: event.target.value
        })
    }
    
    //in a submit button should use prevent option against 
    const submitFunc = (event)=>{
        event.preventDefault();

        console.log(state);
    }

    return (
        <div className= 'Component5'>
        <Form onSubmit={submitFunc}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={handlePw}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </div>
    );    
}
export default Component5;