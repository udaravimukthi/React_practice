import React from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './Post';
import Button from 'react-bootstrap/Button';
import {InputGroup, FormControl} from 'react-bootstrap';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component4 from './Component4';
import Component5 from './Component5';
// import Component6 from './Component6';
import NavBar from './NavBar';
import R1com from './R1com';
import R2com from './R2com';
import { BrowserRouter } from 'react-router-dom';

const App = () =>{
  return (
    <div className="App App2">
      <h2 style = {{color : 'red'}}>Hello</h2>
      {/* <Post/> */}
      <Button>new</Button>
      <InputGroup className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
      <FormControl aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
      </InputGroup>
      <Component1/>
      <Component2/>
      <Component3 name="function based component"/>
      <Component4 name=" class based component"/>
      <Component5/>
      
      <BrowserRouter>
      <NavBar/>
      <R1com/>
      <R2com/>
      </BrowserRouter>

    </div>      
  );
}

export default App;
