import React from "react";
import { Navbar} from "react-bootstrap";
import { Link} from "react-router-dom";
const NavBar = ()=>{
    let id =2;
    return(
        <div>
            <Navbar bg="dark" variant="dark">
              <Link to ="/">Home</Link>
              <Link to ={`/R1component/${id}`}>R1component</Link>
              <Link to ="/R2component">R2component</Link>
            </Navbar>
        </div>
    );
}
export default NavBar;