import React from "react";
import { Navbar} from "react-bootstrap";
import { Link} from "react-router-dom";
const NavBar = ()=>{
    return(
        <div>
            <Navbar bg="dark" variant="dark">
              <Link to ="/home">Home</Link>
              <Link to ="/R1component">R1component</Link>
              <Link to ="/R2component">R2component</Link>

              R2component
            </Navbar>
        </div>
    );
}
export default NavBar;