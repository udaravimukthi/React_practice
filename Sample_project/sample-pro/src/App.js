import React from 'react';
import logo from './logo.svg';
import './App.css';

import Post from './Post';
import Button from 'react-bootstrap/Button';
import {InputGroup, FormControl} from 'react-bootstrap';
// import { makeStyles } from '@material-ui/core/styles';
// import Accordion from '@material-ui/core/Accordion';
// import AccordionSummary from '@material-ui/core/AccordionSummary';
// import AccordionDetails from '@material-ui/core/AccordionDetails';
// import Typography from '@material-ui/core/Typography';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

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
    </div>      
  );
}
// function App() {
//   return (
//     <div>
//        <h1>My first react project</h1>
//        <Post/>
//     </div>
//   );
// }

export default App;
